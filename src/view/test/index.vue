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
        path: '/page6'
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
          <div >
            <div class="mt-10" id="test">
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <p>你的身高从<span class="data">{{ annualData.data2 }}</span> 到<span class="data">{{ annualData.data3 }}</span> </P>
              <p>体重从<span class="data">{{ annualData.data4 }}</span> 到<span class="data">{{ annualData.data5 }}</span> </P>
              <p>四年的体测均分是<span class="data">{{ annualData.data6 }}</span></P>
<!--              <br/><br/>-->
<!--              <p>身高体重只是数字，</P>-->
<!--              <p>真正重要的是你的个性与魅力！</P>-->
<!--              <p>健康和快乐才是你追求的目标🎯</P>-->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.network-girl{
  background: url("../../assets/images/4-test/girl.png") no-repeat;
  background-size: 100% 100%;
}
.network-boy{
  background: url("../../assets/images/4-test/girl.png") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: left;
}
p{
  font-size: large;
  color: rgba(255, 99, 0, 0.92);
}
</style>
