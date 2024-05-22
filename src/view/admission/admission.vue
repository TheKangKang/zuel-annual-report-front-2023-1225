<script>
import { mapState } from 'vuex'
import AOS from "aos"
import { correctPullDown } from '@/utils/global'
import ChangePage from '@/mixins/ChangePage.vue'
// 初始化动画
AOS.init();

export default {
  name: 'index',
  // 混入方法，公共方法previousPage，上滑至上一页
  mixins: [ ChangePage ],
  computed: {
    // 动态计算高度
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
    // 获取性别及年度账单数据
    ...mapState({
      gender: state => state.info.gender,
      annualData: state => state.annualData
    })
  },
  mounted () {
    // 每个页面都要有
    correctPullDown()
  },
  methods: {
    changePage() {
      this.$router.push({
        path: '/page3'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'lesson-boy' : 'lesson-girl'" :style="cssVar" @click="changePage">
      <div class="lesson" :class="gender === 1 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div style="font-size: 15px; align-left:200px; transform: rotate(-8deg);">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p>金榜题名时，</p>
            <p>邮政传佳音。</p>
            <p>2020年8月的一天，</p>
            <p>一份来自中南大的信件</p>
            <p>被郑重地递到了你的手中...</p>
            <p>还记得你无数次</p>
            <p>翻看它时的激动与兴奋吗？</p>
            <p>那些熬过的夜终于变成了光，</p>
            <p>茶山刘，就在前方。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-girl{
  background: url("../../assets/images/1-admission/1.jpg") no-repeat;
  background-size: 100% 100%;
}
.lesson-boy{
  background: url("../../assets/images/1-admission/1.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  margin-left: 120px;
  font-size: medium;
  font-family: 'ziti', sans-serif;
  color: #000000;
}
</style>
