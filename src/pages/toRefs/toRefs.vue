<template>
  {{messager.messages}}
  <button @click="sendMessage">发消息</button>
</template>

<script lang="ts">
import { toRefs, reactive, ref, toRefs, onMounted } from 'vue'
import Messager from './messager';

export default {
    name: 'toRefs',
    setup() {
        const messager = reactive(new Messager());
        messager.onMessage();

        function sendMessage() {
            messager.sendMessage();
        }
        return { messager, sendMessage }
    }
}
</script>

<style>

</style>