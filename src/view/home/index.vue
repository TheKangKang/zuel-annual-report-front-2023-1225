<template>
  <div v-swipeup="changePage">
<!--    <div>-->
<!--      &lt;!&ndash; 测试begin &ndash;&gt;-->
<!--      <label for="userType">选择用户类型:</label>-->
<!--      <select v-model="selectedUserType" id="userType">-->
<!--        <option value="student">学生</option>-->
<!--        <option value="teacher">教师</option>-->
<!--      </select>-->
<!--      <label for="gender">选择性别:</label>-->
<!--      <select v-model="selectedGender" id="gender" @change="updateGender">-->
<!--        <option value="male">男生</option>-->
<!--        <option value="female">女生</option>-->
<!--      </select>-->
<!--    </div>-->
<!--    &lt;!&ndash; 测试end &ndash;&gt;-->
    <div class="home" id="home" :style="cssVar"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // selectedGender: '1', // 默认选中男生
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
    },
    // updateGender() {
    //   this.$store.commit('SET_INFO', {
    //     gender: parseInt(this.selectedGender),
    //   });
    // },
  }
}
</script>

<style scoped>
.home{
  background: url("../../assets/images/home/1.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
