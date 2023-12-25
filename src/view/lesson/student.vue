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
        path: '/lesson/building'
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
          <div v-if="annualData.data1 !== '#N/A' && annualData.data2 !== '#N/A' && annualData.data3 !== '#N/A' && annualData.data4 !== '#N/A'" class="mt-10">
            <p class="year-title">2023年</p>
            <p>你一共上过 <span class="data">{{ annualData.data1 }}</span> 节课</p>
            <p>累计 <span class="data">{{ annualData.data2 }}</span> 个小时</p>
            <p>其中有</p>
            <p>
              <span class="data">{{ annualData.data3 }}</span> 节早八<p>
              <span class="data">{{ annualData.data4 }}</span> 节晚课
            </p>
          </div>
          <!--  兜底文案  -->
          <div v-if="annualData.data1 === '#N/A' || annualData.data2 === '#N/A' || annualData.data3 === '#N/A' || annualData.data4 === '#N/A'"
               style="margin-top:100px; margin-left: 100px" class="mt-10">
            <div class="mt-10">
              <p class="year-title">2023年</p>
              <p>这一年</p>
              <p>你不断学习新知识</p>
              <p>在知识的海洋里遨游</p>
            </div>
            <div class="mt-10">
              <p>从酷夏到金秋</p>
              <p>由金秋入严冬</p>
              <p>时针滴滴答答</p>
              <p>学习的日子总是匆匆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-girl{
  background: url("../../assets/images/lesson/girl-1.jpg") no-repeat;
  background-size: 100% 100%;
}
.lesson-boy{
  background: url("../../assets/images/lesson/boy-1.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  color: #2266D8;
}
</style>
