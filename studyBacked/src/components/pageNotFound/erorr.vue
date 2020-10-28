<template>
<div>
    <p>当前页面不存在，请检查网址是否正确</p>
    <router-link to="/">返回首页</router-link>
</div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
p {
    margin: 20% auto;
    font-size: 18px;
    color: red;
}
</style>
