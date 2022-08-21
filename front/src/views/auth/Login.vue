<template>
  <TailCard class="w-1/6">
    <template #header>
      <h1 class="text-3xl text-center mb-1">Concord</h1>
      <p class="text-gray-800 text-center mb-2">Type your credentials to login.</p>
    </template>
    <template #body>
      <TextField label="Email" type="text" v-model="credentials.email" />

      <TextField label="Password" type="password" v-model="credentials.password" />

      <TailButton>
        <template #content>Login</template>
      </TailButton>
    </template>
  </TailCard>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import TailCard from "@/components/TailCard.vue";
import TailButton from '@/components/TailButton.vue'
import TextField from "@/components/TextField.vue";

export default defineComponent({
  name: 'LoginPage',
  components: {
    TextField,
    TailButton,
    TailCard
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  }
})

</script>
