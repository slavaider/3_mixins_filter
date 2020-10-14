<template>
  <div>
    <h2>Counter</h2>
    <label>
      <input type="text" v-model="searchName" />
    </label>
    <ul>
      <li v-for="name of filterNames" :key="name">{{ name }}</li>
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
