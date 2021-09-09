<template>
  <div class="first-menu">
      {{ menuList }}
  </div>
</template>

<script>
import { ref } from 'vue'
import MenuList from '@/util/menu'
export default {
    name: 'menu',
    setup() {
        menuList = ref(MenuList);
        return {
            menuList
        }
    }
}
</script>

<style>

</style>