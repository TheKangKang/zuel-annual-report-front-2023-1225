<script>
export default {
  name: 'intro',
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
      this.$router.push({
        path: '/person/page'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage">
    <div class="intro" :style="cssVar" @click="changePage"></div>
  </div>
</template>

<style scoped>
.intro{
  background: url("../../assets/images/home/intro.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
