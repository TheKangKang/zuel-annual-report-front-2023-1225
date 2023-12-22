<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import {correctPullDown} from "@/utils/global";

export default {
  name: 'App',
  mounted() {
    correctPullDown();
  }
}
</script>

<style src="./assets/global.css">
/*@import "./assets/fonts/fonts.css";*/
#app{
  /*//font-family: "Adobe 楷体 Std R";*/
  font-family: "MyCustomFont";
  color: black;
}
span{
  //font-family: "RueZi";
}
</style>
