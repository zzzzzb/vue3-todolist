<script setup lang="ts">
import { ref } from 'vue'
import {TodoData} from '../assets/data';

defineProps<{
    itemData: TodoData
}>()

</script>

<template>
    <div class="item-content">
        <div>{{itemData.title}}</div>
        <div>{{itemData.content}}</div>
        <div>{{itemData.timestamp}}</div>
        <div>{{itemData.isDone}}</div>
    </div>
</template>

<style scoped lang="less">
.item-content {
    width: 100%;
    height: 350px;
    border-bottom: 1px solid #ccc;
}
</style>
