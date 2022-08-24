<script setup lang="ts">
const props = defineProps<{ title: string }>()

</script>

<template>
    <div class="title-area">{{ props.title }}</div>
</template>

<style scoped lang="less">
.title-area {
    width: 1242px;
    height: 200px;
    font-size: 90px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
    box-shadow: 0 2px 10px 1px #ccc;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
