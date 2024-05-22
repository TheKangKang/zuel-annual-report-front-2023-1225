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
        path: '/page8'
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
              <br/><br/><br/><br/>
              <p>你四年一共修了<span class="data">{{ annualData.data12 }}</span>门课，</p>
              <p><span class="data">{{ annualData.data13 }}</span>节早八        <span class="data">{{ annualData.data14 }}</span>节晚课。</p>
              <p>你去过次数最多的教学楼是<span class="data">{{ annualData.data28 }}</span></p>
              <p>每一堂课都是知识的积累。</p>
              <p>账单上的数字，</p>
              <p>都是你成长的见证，</p>
              <p>是为梦想铺下的基石。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sport-girl{
  background: url("../../assets/images/6-lesson/girl.png") no-repeat;
  background-size: 100% 100%;
}
.sport-boy{
  background: url("../../assets/images/6-lesson/girl.png") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  text-align: center;
  color: #000000;
}
</style>
