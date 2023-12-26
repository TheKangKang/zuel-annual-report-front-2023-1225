<script>
export default {
  name: 'end2',
  computed: {
    // 动态计算高度
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    }
  }
}
</script>

<template>
  <div class="end" :style="cssVar"></div>
</template>

<style scoped>
.end{
  background: url("../../assets/images/home/end.png") no-repeat;
  background-size: 100% 100%;
}
</style>
