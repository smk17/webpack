<template>
  <div>
    <my-header></my-header>
    <img src="../../assets/logo.png">
    <h1>{{ computedMsg }}</h1>
    <p>{{ msg }}</p>
    <p>store 数据 ：{{ info.data }} --- {{ info.count }}</p>
    <button @click="addCount">增加count</button>
    <button @click="goToHelloWorld">goToHelloWorld</button>
  </div>
</template>

<script src="./IndexPage.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
