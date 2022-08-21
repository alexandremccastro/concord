<template>
  <div class="block mb-2">
    <label class="block text-left font-medium mb-1 text-gray-800">{{ label }}</label>
    <input :type="type" :value="value" v-model="value" class="bg-gray-50 block text-gray-800 w-full focus:bg-white rounded outline-none border-2 px-2 h-10 hover:border-gray-300 focus:border-blue-400" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null
    },

  },

  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})

</script>