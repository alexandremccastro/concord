<template>
  <div class="bg-white rounded-md shadow h-fit p-5">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer">
      <hr />
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TailCard',

})
</script>