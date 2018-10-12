import Vue from 'vue'
import App from "./App.vue"
import { index } from './components/index'

new Vue({
	el : "#app",
	render: function (createElement) {
		return createElement(App);
	},
	components : { App }
})