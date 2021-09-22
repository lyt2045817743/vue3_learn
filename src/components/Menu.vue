<template>
  <div class="menu">
    <div class="menu-box" v-for="item in menuList">
        <div class="first-menu">
            {{ item.menuLabel }}
        </div>
        <div v-for="secondItem in item.children">
            <div class="second-menu">
                {{ secondItem.menuLabel }}
            </div>
            <ul class="third-menu">
                <li v-for="thirdItem in secondItem.children">
                    {{ thirdItem.menuLabel }}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import menu from '../util/menu'
export default {
    name: 'Menu',
    setup() {
        const menuList = ref(menu);
        return {
            menuList
        }
    }
}
</script>

<style lang="scss">
.menu {
    width: 200px;
    min-height: 800px;
    padding: 10px;
    background-color: rgb(189, 212, 231);
    .first-menu {
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0;
    }
    .second-menu {
        margin: 10px 0 10px 10px;
    }
    .third-menu {
        margin: 5px 0;
    }
    .first-menu, .second-menu, .third-menu {
        cursor: pointer;
        &:hover {
            color: blue;
        }
    }
}
</style>