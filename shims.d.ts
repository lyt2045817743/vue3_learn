/**
 * typescript 只能理解 .ts 文件，无法理解 .vue文件，因此要进行声明。
 */
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}