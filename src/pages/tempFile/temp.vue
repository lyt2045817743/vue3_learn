<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld :msg="msg" @changeMsg="changeMsg" /> -->
  <!-- <toRefs /> -->
  <div id="hooks">
    <hooksDemo v-if="show" />
    <button @click="updateShow" v-if="show" >隐藏上方元素</button>
    <button @click="updateShow" v-if="!show" >显示上方元素</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import toRefs from './pages/toRefs/toRefs.vue';
import hooksDemo from './pages/hooksDemo/hooksDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    toRefs,
    hooksDemo
  },
  setup() {
    const msg = ref('Hello Vue 3.0 + Vite');
    const show = ref(true);
    function changeMsg(newVal) {
      msg.value = newVal;
    }
    function updateShow() {
      show.value = !show.value;
    }
    return {
      msg,
      show,
      changeMsg,
      updateShow
    }
  }
}
</script>

<style>

</style>