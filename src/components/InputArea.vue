<script setup lang="ts">
import {ref} from 'vue'
import {getData, saveData} from "../assets/data";

const showInput= ref<boolean>(false);

const title = ref<string>('');
const content = ref<string>('');
const timestamp = ref<number>(0);

function handleShowInput () {
    showInput.value = true;
}

function handleSaveData() {
    const dataList = getData('todoList')
    const data = {
        title: title.value,
        content: content.value,
        timestamp: timestamp.value,
        isDone: false,
    };
    dataList.push(data);
    saveData('todoList', dataList);
    showInput.value = false;
}

</script>

<template>
    <div class="input-btn" @click="handleShowInput">+</div>
    <div
        v-if="showInput"
        class="input-dialog"
    >
        <div class="input-dialog-mask"></div>
        <div class="input-dialog-content">
            <input class="input" v-model="title">
            <input class="input" v-model="content">
            <input class="input" v-model="timestamp">
            <button class="confirm-btn" @click="handleSaveData">加入列表</button>
        </div>
    </div>
</template>

<style scoped lang="less">
.input-btn {
    width: 180px;
    height: 180px;
    border: 1px solid #000;
    border-radius: 100%;
    text-align: center;
    line-height: 160px;
    font-weight: bold;
    font-size: 130px;
    position: fixed;
    right: 100px;
    bottom: 150px;
}

.input-dialog {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    &-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        opacity: 0.6;
    }

    &-content {
        width: 1000px;
        height: 1300px;
        border: 1px solid #000;
        border-radius: 80px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
    }
}
</style>
