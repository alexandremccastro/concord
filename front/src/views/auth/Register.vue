<template>
  <TailCard class="w-1/6">
    <template #header>
      <h1 class="text-3xl text-center mb-1">Concord</h1>
      <p class="text-gray-800 text-center mb-2">Join our community for free</p>
    </template>
    <template #body>
      <TextField label="Name" type="text" v-model="user.name" />

      <TextField label="Email" type="text" v-model="user.email" />

      <TextField label="Password" type="password" v-model="user.password" />

      <TextField label="Password Confirmation" type="password" v-model="user.passwordConfirmation" />

      <TailButton>
        <template #content>Register</template>
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
  name: 'RegisterPage',
  components: {
    TextField,
    TailButton,
    TailCard
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  }
})

</script>
