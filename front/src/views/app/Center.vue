<template>
  <div class="flex justify-center font-sans items-center h-screen bg-gray-100">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CenterPage'
})
</script>