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
        path: '/canteen'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'lesson-boy' : 'lesson-girl'" :style="cssVar" @click="changePage">
      <!--     因为设计稿中男女的文字布局有所不一样，所以需要判断性别选择样式 -->
      <div class="lesson" :class="gender === 1 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div v-if="annualData.data5 !== '#N/A' && annualData.data6 !== '#N/A' && annualData.data7 !== '#N/A' && annualData.data8 !== '#N/A' ">
            <div class="mt-10">
              <br/>
              <p class="year-title">2023年</p>
              <p>你上课最多的教学楼是 <span class="data">{{ annualData.data5 }}</span></p>
              <p>累计上过 <span class="data">{{ annualData.data6 }}</span> 节课</p>
            </div>
            <div class="mt-10">
              <p>你上课最多的教室是 <span class="data">{{ annualData.data7 }}</span></p>
              <p>累计上过 <span class="data">{{ annualData.data8 }}</span> 节课</p>
              <p>一分耕耘一分收获</p>
              <p>这些数字，见证你的努力！</p>
            </div>
          </div>
          <!--  兜底文案  -->
          <div v-if="annualData.data5 === '#N/A' || annualData.data6 === '#N/A' || annualData.data7 === '#N/A' || annualData.data8 === '#N/A' ">
            <div class="mt-10">
              <br/>
              <p class="year-title">2023年</p>
              <p>一分耕耘一分收获</p>
              <p>这些数字，见证你的努力！</p>
            </div>
            <div class="mt-10">
              <p>光阴变化之际</p>
              <p>不变的是你风雨兼程</p>
              <p>奔向每一节课的身影</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-girl{
  background: url("../../assets/images/lesson/girl-2.jpg") no-repeat;
  background-size: 100% 100%;
}
.lesson-boy{
  background: url("../../assets/images/lesson/boy-2.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: left;
}
p{
  color: #2266D8;
}
</style>
