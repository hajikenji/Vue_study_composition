import {reactive} from 'vue';

export default {
  name: 'HelloJSX',
  setup(){
    const data = reactive({
      title: 'HelloJSX',
      msg: 'this is JSXcomponent sample'
    });
    return () => (
      <div class="alert alert-warning">
        <h1>{data.title}</h1>
        <p>{data.msg}</p>
      </div>
    )
  }
}