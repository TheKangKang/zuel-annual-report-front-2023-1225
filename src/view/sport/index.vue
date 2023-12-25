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
        path: '/person/intro'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'sport-boy' : 'sport-girl'" :style="cssVar" @click="changePage">
      <!--     因为设计稿中男女的文字布局有所不一样，所以需要判断性别选择样式 -->
      <div class="sport-con" :class="gender === 1 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div v-if="annualData.data25 !== '#N/A' && annualData.data26 !== '#N/A'">
            <div class="mt-10">
              <p class="year-title">2023年</p>
              <p>学习和工作之外，身体和锻炼同样重要！</p>
              <p>你预约体育场馆次数是 <span class="data">{{ annualData.data25 }}</span> 次</p>
              <p>全校排名 <span class="data">{{ annualData.data26 }}</span> 名</p>
            </div>
            <div class="mt-10">
              <p>运动是青春的调味剂</p>
              <p>愿你的每一年</p>
              <p>都有强健的体魄和不竭的活力</p>
            </div>
          </div>
          <!--  兜底文案  -->
          <div v-if="annualData.data25 === '#N/A' || annualData.data26 === '#N/A'">
            <div class="mt-10">
              <p class="year-title">2023年</p>
              <p>篮球场挥洒汗水</p>
              <p>如梭岁月中</p>
              <p>绿茵地热情洋溢</p>
            </div>
            <div class="mt-10">
              <p>光阴荏苒间</p>
              <p>暖阳正好</p>
              <p>风过林梢</p>
              <p>和喜爱的运动一起</p>
              <p>去享受生活吧</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sport-girl{
  background: url("../../assets/images/sport/sport.jpg") no-repeat;
  background-size: 100% 100%;
}
.sport-boy{
  background: url("../../assets/images/sport/sport.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  color: #000000;
}
</style>
