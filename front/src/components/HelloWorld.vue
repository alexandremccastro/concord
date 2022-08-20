<template>
  <TailCard class="w-1/6">
    <template #header>
      <h1 class="text-3xl text-center mb-1">Concord</h1>
      <p class="text-gray-800 text-center mb-2">Type your credentials to login.</p>
    </template>
    <template #body>
      <TextField label="Email" type="text" v-model="msg" />

      <TextField label="Password" type="password" v-model="msg" />

      <TailButton>
        <template #content>Teste</template>
      </TailButton>
    </template>
  </TailCard>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import { io, Socket } from 'socket.io-client'

import TailCard from "@/components/TailCard.vue";
import TailButton from '@/components/TailButton.vue'
import TextField from "@/components/TextField.vue";

export default defineComponent({
  props: ['test'],
  components: {
    TextField,
    TailButton,
    TailCard
  },
  data() {
    return {
      msg: "Welcome to Concord",
    }
  },

  created() {
    console.log(process.env)
    const socket: Socket = io(process.env.VUE_APP_SERVER_URL)

    socket.emit('test')

    socket.on('welcome', (response: any) => {
      alert(response.message)
    })
  },

  methods: {
    showAlert() {
      alert("This is a alert")
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
