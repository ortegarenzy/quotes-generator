import Vue from "vue"

import Container from "./Container.vue"
import Credit from "./Credit.vue"
import Label from "./Label.vue"
import Row from "./Row.vue"
import TextButton from "./TextButton.vue"

Vue.component("Container", Container)
Vue.component("Credit", Credit)
Vue.component("TextButton", TextButton)
Vue.component("Label", Label)
Vue.component("Row", Row)

export {
	Container,
	Credit,
	Label,
	Row,
	TextButton
}