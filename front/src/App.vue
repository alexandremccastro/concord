
<template>

  <div class="flex justify-center font-sans items-center h-screen bg-gray-100">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
<style lang="css">
@import '@/assets/styles/main.scss';
</style>


