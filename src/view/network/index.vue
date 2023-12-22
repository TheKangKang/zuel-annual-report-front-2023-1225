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
        path: '/library'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'network-boy' : 'network-girl'" :style="cssVar" @click="changePage">
      <!--     因为设计稿中男女的文字布局有所不一样，所以需要判断性别选择样式 -->
      <div class="network-con" :class="gender === 1 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <p class="year-title">2023年</p>
          <div class="mt-10">
            <p>你一共连接校园网<span class="data">{{ annualData.data15 }}</span>小时</p>
            <p>累计使用<span class="data">{{ annualData.data16 }}</span>G</p>
          </div>
          <div class="mt-10">
            <p>使用校园网最长的一天是<span class="data">{{ annualData.data17 }}</span></p>
            <p>最晚登入校园网的时间是<span class="data">{{ annualData.data18 }}</span></p>
          </div>
          <div class="mt-10">
            <p>这些都是属于你的美好冲浪回忆</p>
            <p>网络生活虽然精彩</p>
            <p>也要注意保护眼睛哦</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.network-girl{
  background: url("../../assets/images/network/girl.jpg") no-repeat;
  background-size: 100% 100%;
}
.network-boy{
  background: url("../../assets/images/network/boy.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  color: #fdfcfc;
}
</style>
