import Vue from 'vue';
import Main from 'Components/Main.vue';
import './main.scss';

new Vue({
  render: createElement => createElement(Main),
  el: '#app'
});

