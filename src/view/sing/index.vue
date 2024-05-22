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
        path: '/end'
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
            <br/><br/><br/><br/><br/><br/>
            <p>南湖之畔，繁星满天，</p>
            <p>悠扬歌声，动人心弦。</p>
            <p>在中南唱歌跳舞大学这四年，</p>
            <p>超过30场草地音乐会和歌友会，</p>
            <p>打破了南湖的沉寂，</p>
            <p>点燃了青春的热情。</p>
            <p>音乐连接起zuelers，</p>
            <p>歌声传递着热爱！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-girl{
  background: url("../../assets/images/9-sing/girl.jpg") no-repeat;
  background-size: 100% 100%;
}
.lesson-boy{
  background: url("../../assets/images/9-sing/girl.jpg") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  font-size: large;
  text-align: center;
  color: rgba(140, 59, 6, 0.92);
}
</style>
