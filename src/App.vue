<script setup lang="ts">
import {ref} from 'vue';
import {getData, TodoData} from './assets/data';

import Title from './components/Title.vue';
import List from './components/List.vue';
import InputArea from './components/InputArea.vue';

const title = ref('计划表');

const todoList: TodoData[] = getData('todoList');
</script>

<template>
    <div class="wrapper">
        <Title :title="title"/>
        <List :todoList="todoList"></List>
        <InputArea></InputArea>
    </div>
</template>

<style lang="less">
@import "normalize.css";

.wrapper {
    width: 100%;
    position: relative;
    padding-top: 200px;
}
</style>
