<template>
  <div class="alert alert-primary">
    <h1>{{title}}</h1>
    <p>{{data.msg}} ( {{data.count}} )</p>
    <input type="number" class="form-control" min="0" v-model="data.num">
    <button class="btn btn-primary m-3" v-on:click="action">click</button>
    <p>{{ data.msgTotal }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloTest',
  props: {
    title: String
  }
  ,
  setup() {
    const data = ref({
      msg: 'this is ref-value',
      count: 0,
      num: 0,
      msgTotal: '数字が反映されるよ'
    });

    setInterval(()=>{
      data.value.count++;
    }, 1000);

    const action = () => {
      let total = 0;
      for (let index = 0; index < data.value.num; index++) {
        total += index;
      }
      data.value.msgTotal = 'total: ' + total;
    };

    return { data, action };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
