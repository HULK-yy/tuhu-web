<template>
  <div id="app">
    <HelloWorld :sTimer="timer"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  timer: number = new Date().getTime();
  mounted () {
    axios
      .post("https://geylnu.com/tuhu/pageview", {
          url: 'http://localhost:8080',
          th_app_id: 'web'
      })
      .then(res => {
          console.log(res)
      });
  }
}
let sTimer = new Date().getTime();
window.onload = function () {
  let lastTimer = new Date().getTime();
  let timer = lastTimer - sTimer;
  axios.post('https://geylnu.com/tuhu/pageloadDuration', {
    url: 'http://localhost:8080',
    th_app_id: 'web',
    duration: timer + 'ms',
  }).then(res => {
    console.log('===', res);
  });
}
</script>
