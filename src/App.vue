<template>
  <div id="app">
    <router-view />
    <Music></Music>
  </div>
</template>

<script>

import {correctPullDown} from "@/utils/global";
import Music from "@/components/Music";
export default {
  name: 'App',
  components: {Music},
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
