<template>
  <div v-swipeup="changePage">
    <div class="index-page" :style="cssVar" @click="changePage"></div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'index',
  computed: {
    // 动态计算高度
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
    // 获取用户身份
    ...mapState({
      type: state => state.info.type
    })
  },
  methods: {
    changePage() {
      this.$router.push({
        path: '/page2'
      })
    }
  }
  
}
</script>

<style scoped>
.index-page{
  background: url("../../assets/images/home/2.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
