<script setup lang="ts">
import { ref } from 'vue'
import {TodoData} from '../assets/data';

import Item from '../components/Item.vue';

const props = defineProps<{ todoList: TodoData[] }>()
</script>

<template>
    <div class="todo-list">
        <Item
            v-for="item in todoList"
            :itemData="item"
        ></Item>
    </div>
</template>

<style scoped lang="less">

</style>
