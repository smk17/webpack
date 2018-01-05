import Vue from 'vue'
import Router from 'vue-router'
import Component from 'vue-class-component'
import { Getter, Mutation } from 'vuex-class'
import MyHeader from '@/components/MyHeader.vue'

@Component({
  components: {
    MyHeader
  }
})
export default class IndexPage extends Vue {
  @Getter info
  @Mutation('info') mutationInfo

  msg = 'Vue-Typescript App'

  // 声明周期钩子
  mounted () {
    // this.greet()
  }

  // 计算属性
  get computedMsg () {
    return 'Welcome to  ' + this.msg
  }

  // 方法
  addCount () {
    this.mutationInfo()
    console.log(this.info.count)
  }

  goToHelloWorld () {
    this.$router.push('/HelloWorld')
  }
}
