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
        path: '/page5'
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
          <div class="mt-10" style="text-align: center">
              <br/><br/>
              <p>时光容易把人抛</p>
              <p>红了樱桃，绿了芭蕉，</p>
              <p>恍然间，</p>
              <p>似又来到那个夏天，</p>
              <p>手指轻叩<span class="data">{{ annualData.data1 }}</span> 寝室的宿舍门，</p>
              <p>奏响了整个大学生活的篇章。</p>
              <p>大包小包被艰难地拎上楼梯，</p>
              <p>行囊里装着的，不仅是衣物，</p>
              <p>更是对未来的憧憬与期待...</p>
              <p>还记得第一天晚上自己的所思所想吗？</p>
              <p>是偷偷想念父母</p>
              <p>还是暗暗担心第二天的军训呢</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.canteen-girl{
  background: url("../../assets/images/3-dormitory/girl.png") no-repeat;
  background-size: 100% 100%;
}
.canteen-boy{
  background: url("../../assets/images/3-dormitory/girl.png") no-repeat;
  background-size: 100% 100%;
}
.boy-con{
  padding: 50px 80px;
}
.girl-con{
  text-align: end;
}
p{
  font-size: medium;
  color: rgba(161, 83, 20, 0.92);
}
</style>
