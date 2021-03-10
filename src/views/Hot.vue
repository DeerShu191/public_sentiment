<template>
<div>
  <span>这里是热点页</span>
  <button @click="Click" >去登陆</button>
</div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {
    };
  },
  methods:{
    Click(){
      this.$router.push("/Login")
    }
  }
};
</script>

<style scoped>
h1,
h2 {
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
