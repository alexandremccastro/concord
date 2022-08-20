<template>
  <button :disabled="disabled" class="bg-blue-500 outline-none rounded px-3 py-2 w-full text-white hover:bg-blue-600 focus:bg-blue-600">
    <slot name="content"></slot>
  </button>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CustomButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>