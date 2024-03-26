<template>
  <!-- <Menu /> -->
  <!-- <div ref='editor'></div> -->
  <!-- <button @click='syncHTML'>同步内容</button>
  <div :innerHTML='content.html'></div> -->
  <router-view />
  <!-- <toRefs /> -->
</template>

<script>
import Menu from "./components/Menu.vue"
// import WangEditor from 'wangeditor'
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
import toRefs from './pages/toRefs/toRefs.vue';
export default {
  name: 'app',
  components: {
    Menu,
    toRefs
  },
  setup() {
    // const editor = ref();
    // const content = reactive({
    //     html: '',
    //     text: '',
    // });
    let instance;
    onMounted(() => {
        // instance = new WangEditor(editor.value);
        // // Object.assign(instance.config, {
        // //     onchange() {
        // //         console.log('change');
        // //     },
        // // });
        // instance.config.menus = [
        //     'head',
        //     'bold',
        //     'indent',
        //     'foreColor',
        //     'list',
        //     'justify',
        //     'quote',
        //     'image',
        //     'video',
        //     'splitLine',
        //     'undo',
        //     'redo',
        // ]
        // instance.create();
    });
    onBeforeUnmount(() => {
        // instance.destroy();
        // instance = null;
    });
    // const syncHTML = () => {
    //     content.html = instance.txt.html();
    // };
    return {
        // syncHTML,
        // editor,
        // content,
    };
  }
}
</script>

<style lang="scss" scoped>
  :deep(.w-e-toolbar) {
      border: none !important;
      border-bottom: 1px solid #EEE !important;
  }
</style>