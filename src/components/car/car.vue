<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>
<script>
    export default {
        name: "Counter",

    };
</script>
<style scoped>
    h2 {
        color: red;
    }
</style>
