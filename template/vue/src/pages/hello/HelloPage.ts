import Vue from 'vue'
import Router from 'vue-router'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import MyHeader from '@/components/MyHeader.vue'

@Component({
  components: {
    MyHeader
  }
})
export default class HelloPage extends Vue {
  @Getter info

  msg = 'Welcome to HelloWorld'

  goBack () {
    this.$router.go(-1)
  }
}
