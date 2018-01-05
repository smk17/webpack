<template>
  <header>
    <span class="title">{{ title }}</span>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class MyHeader extends Vue{
    title = 'Vue'
  }
</script>

<style lang="less" scoped>
header{
  width: 100%;
  height: 4.8rem;
  background-color: #2A88DF;
  color: white;
}
.title{
  font-size: 3.8rem;
  margin: .5rem 0;
  line-height: 4.8rem;
}
</style>
