<template>
  <div>{{name}} {{age}}</div>
</template>

<script>
import { toRefs, reactive } from 'vue'
const state = reactive({
    name: 'lyt',
    age: 22
})
export default {
    name: 'toRefs',
    setup() {
        setTimeout(()=> {
            state.age = 21
        }, 1500)
        return toRefs(state)
    }
}
</script>

<style>

</style>