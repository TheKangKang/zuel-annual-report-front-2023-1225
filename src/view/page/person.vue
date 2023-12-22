<script>
import { mapState } from 'vuex'

export default {
  name: 'person',
  data () {
    return {
      // personType 0 1 2 3 4分别代表5种形象：
      imgList: [
        //  personType 0 运动
        [require('@/assets/images/person/sport-boy.jpg'), require('@/assets/images/person/sport-girl.jpg')],
        //  personType 1 学海
        [require('@/assets/images/person/study-boy.jpg'), require('@/assets/images/person/study-girl.jpg')],
        //  personType 2 图书
        [require('@/assets/images/person/library-boy.jpg'), require('@/assets/images/person/library-girl.jpg')],
        //  personType 3 超音速
        [require('@/assets/images/person/network-boy.jpg'), require('@/assets/images/person/network-girl.jpg')],
        //  personType 4 美食
        [require('@/assets/images/person/food-boy.jpg'), require('@/assets/images/person/food-girl.jpg')]
      ]
    }
  },
  computed: {
    // 动态计算高度
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
    // 获取个人形象类型及性别
    ...mapState({
      personType: state => state.info.personType,
      gender: state => state.info.gender
    })
  },
  methods: {
    changePage() {
      this.$router.push({
        path: '/end'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage">
    <!--  假设gender 1 为男 2 为女  -->
    <div class="person" :style="cssVar" @click="changePage">
      <img :src="imgList[personType][gender - 1]">
    </div>
  </div>
</template>

<style scoped>
.person img{
  width: 100%;
  height: 100%;
}
</style>
