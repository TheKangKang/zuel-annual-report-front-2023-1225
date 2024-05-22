<script>
import { mapState } from 'vuex'
import AOS from "aos"
import { correctPullDown } from '@/utils/global'
import ChangePage from '@/mixins/ChangePage.vue'
// 初始化动画
AOS.init();

export default {
  name: 'index2',
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
        path: '/page7'
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
          annualData.data22 !== '#N/A' && annualData.data23 !== '#N/A' && annualData.data24 !== '#N/A'" >
            <div class="mt-10">
              <br/><br/><br/><br/>
              <p>从2020年到2024年一共举办了3次运动会，</p>
              <p>文明其精神的同时，</p>
              <p>也不要忘了野蛮我们的体魄呀！</p>
              <p>一个篮球，一副球拍</p>
              <p>与好友相约一个下午。</p>
              <p>这四年,你一共预约了 <span class="data">{{ annualData.data10 }}</span> 次智慧场馆</p>
              <p>运动健将的称号非你莫属！</p>
              <p>其中羽毛球预约次数</p>
              <p>高达 <span class="data">{{ annualData.data11 }}</span> 次</p>
              <p>这项运动应该是你的真爱了</p>
              <p>要继续坚持哦！</p>
              <p>愿你携自身所爱</p>
              <p>在自己的领域闪闪发光！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.library-girl{
  background: url("../../assets/images/5-sport/boy2.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.library-boy{
  background: url("../../assets/images/5-sport/boy2.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: left;
}
p{
  text-align: center;
  font-size: 35px;
  color: rgba(115, 66, 34, 0.92);
}
</style>
