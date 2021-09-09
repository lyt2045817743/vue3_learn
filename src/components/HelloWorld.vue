<template>
    <h1>{{ msg }}</h1>
    <button @click="changeCountRefHandle($event), logMsg($event)">countRef is: {{ countRef }}-{{state.count}}</button>
    <button @click="changeMsgHandle">changeMsg</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { onBeforeMount, ref, reactive, toRef } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['changeMsg'],
  setup(props, { emit }) {
    // const countRef = ref(0); // 1
    const state = reactive({
      count: 0
    })
    const countRef = toRef(state, 'count') // 2
    onBeforeMount( () => {
      console.log('onBeforeMount');
    });

    function changeMsgHandle() {
      emit('changeMsg', 'msg has changed')
    }

    function changeCountRefHandle() {
      console.log(countRef.value);
      countRef.value ++;
    }

    function logMsg() {
      console.log(props, props.msg);
    }

    return {
      countRef,
      state,
      logMsg,
      changeCountRefHandle,
      changeMsgHandle
    }
  }
}
</script>
