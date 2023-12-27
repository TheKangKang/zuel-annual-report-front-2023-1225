<script>
export default {
  name: 'end',
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
      this.$router.push({ path: '/end2' })
    }
  }
}
</script>

<template>
  <div class="end" :style="cssVar" v-swipeup="changePage" v-swipedown="previousPage" @click="changePage">
  </div>
</template>

<style scoped>
.end{
  background: url("../../assets/images/home/end.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
