<template>
  <TailCard class="w-1/6">
    <template #header>
      <h1 class="text-3xl text-center mb-1">Reset Password</h1>
      <p class="text-gray-800 text-center mb-2">Enter your email above and we will send a password reset link.</p>
    </template>
    <template #body>
      <TextField label="Email" type="text" v-model="email" />

      <TailButton>
        <template #content>Send Link</template>
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
  name: 'RequestResetPage',

  components: {
    TextField,
    TailButton,
    TailCard
  },

  data() {
    return {
      email: ''
    }
  }
})

</script>
