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
        path: '/sport'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'library-boy' : 'library-girl'" :style="cssVar" @click="changePage">
      <!--     因为设计稿中男女的文字布局有所不一样，所以需要判断性别选择样式 -->
      <div class="library-con" :class="gender === 1 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div v-if="annualData.data19 !== '#N/A' && annualData.data20 !== '#N/A' && annualData.data21 !== '#N/A' &&
          annualData.data22 !== '#N/A' && annualData.data23 !== '#N/A' && annualData.data24 !== '#N/A'" class="mt-10">
            <div class="mt-10">
              <p class="year-title">2023年</p>
              <p>你在图书馆年度预约次数为<span class="data">{{ annualData.data19 }}</span>次</p>
              <p>自习累计时长达<span class="data">{{ annualData.data20 }}</span>小时</p>
              <p>排名<span class="data">{{ annualData.data21 }}</span></p>
            </div>
            <div class="mt-10">
              <p>你的进馆次数为<span class="data">{{ annualData.data22 }}</span>次</p>
              <p>一共借阅了<span class="data">{{ annualData.data23 }}</span>本图书</p>
              <p>排名<span class="data">{{ annualData.data24 }}</span></p>
            </div>
          </div>
          <!--  兜底文案  -->
          <div v-if="annualData.data19 === '#N/A' || annualData.data20 === '#N/A' || annualData.data21 === '#N/A' ||
            annualData.data22 === '#N/A' || annualData.data23 === '#N/A' || annualData.data24 === '#N/A'" class="mt-10">
            <div class="mt-10">
              <p class="year-title">2023年</p>
              <p>“天下第一好事，还是读书”</p>
              <p>每一页的“清风明月”</p>
              <p>当“知你心”</p>
            </div>
            <div class="mt-10">
              <p>无论是阅读所爱</p>
              <p>还是复习备考</p>
              <p>风里雨里</p>
              <p>图书馆始终在等你</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.library-girl{
  background: url("../../assets/images/library/girl.jpg") no-repeat;
  background-size: 100% 100%;
}
.library-boy{
  background: url("../../assets/images/library/boy.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: left;
}
p{
  color: #fdfcfc;
}
</style>
