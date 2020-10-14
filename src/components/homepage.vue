<template>
  <div id="app">
    <h1>Hell'o</h1>
    <h2>{{counter}}</h2>
    <button type="button" @click="counter++">Sum</button>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      counter: 0
    };
  }
};

</script>

