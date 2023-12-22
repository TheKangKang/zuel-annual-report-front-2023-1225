<template>
  <div v-swipeup="changePage">
    <div class="home" id="home" :style="cssVar"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
    }
  },
  computed: {
    // 动态计算高度
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    }
  },
  methods: {
    changePage() {
      this.$router.push({ path: '/page' })
    }
  }
}
</script>

<style scoped>
.home{
  background: url("../../assets/images/home/1.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
