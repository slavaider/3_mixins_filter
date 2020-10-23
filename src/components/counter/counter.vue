<template>
    <div>
        <h2>Counter</h2>
        <label>
            <input class="form-control" type="text" v-model="searchName"/>
        </label>
        <ul class="list-group col-3">
            <li :key="name" class="list-group-item " v-for="name of filterNames">{{ name }}</li>
        </ul>
    </div>
</template>
<script>
    import listMixin from "../../listMixin";

    export default {
        name: "Counter",
        mixins: [listMixin]
    };
</script>
<style scoped>
</style>
