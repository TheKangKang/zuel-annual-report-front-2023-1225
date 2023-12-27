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
        path: '/network'
      })
    }
  }
}
</script>

<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--  假设gender 1 为男 2 为女  -->
    <div :class="gender === 1 ? 'canteen-boy' : 'canteen-girl'" :style="cssVar" @click="changePage">
      <!--     因为设计稿中男女的文字布局有所不一样，所以需要判断性别选择样式 -->
      <div class="canteen-con" :class="gender === 2 ? '' : 'girl-con'">
        <!--       这里是动画的效果，参考aos官网https://michalsnik.github.io/aos/ -->
        <div :data-aos="gender === 1 ? 'fade-right' : 'fade-left'"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div v-if="annualData.data9 !=='#N/A' && annualData.data10 !== '#N/A' && annualData.data11 !== '#N/A'
            && annualData.data12 !== '#N/A' && annualData.data13 !== '#N/A' && annualData.data14 !== '#N/A'" class="mt-10">
            <div class="mt-10">
              <br/>
              <p class="year-title">2023年</p>
              <p>你的校园卡总充值额为 <span class="data">{{ annualData.data9 }}</span> 元</p>
              <p>超过了 <span class="data">{{ annualData.data10 }}</span> 的zuelers</p>
            </div>
            <div class="mt-10">
              <p>你消费最多的食堂是 <span class="data">{{ annualData.data11 }}</span></p>
              <p>共计花销 <span class="data">{{ annualData.data12 }}</span> 元</p>
            </div>
            <div class="mt-10">
              <p><span class="data">{{ annualData.data13 }}</span></p>
              <p>你单日消费了 <span class="data">{{ annualData.data14 }}</span> 元</p>
            </div>
          </div>
          <!--  兜底文案  -->
          <div v-if="annualData.data9 ==='#N/A' || annualData.data10 === '#N/A' || annualData.data11 === '#N/A'
            || annualData.data12 === '#N/A' || annualData.data13 === '#N/A' || annualData.data14 === '#N/A'" class="mt-10">
            <div class="mt-10">
              <br/><br/><br/><br/>
              <p class="year-title">2023年</p>
              <p>拉长耳朵 提高警觉</p>
              <p>食堂是不是出新菜品啦</p>
              <p>神经细胞 全面戒备</p>
            </div>
            <div class="mt-10">
              <p>GDP提高需要吃货的消费</p>
              <p>还等什么</p>
              <p>去打卡美食吧</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.canteen-girl{
  background: url("../../assets/images/canteen/girl.jpg") no-repeat;
  background-size: 100% 100%;
}
.canteen-boy{
  background: url("../../assets/images/canteen/boy.jpg") no-repeat;
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
