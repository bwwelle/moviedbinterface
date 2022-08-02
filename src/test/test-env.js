/* eslint-disable */
window.Vue = require('vue')
import Vuetify from 'vuetify'

Vue.use(Vuetify)

createAppDiv()

function createAppDiv() {
	const app = document.createElement('div')
	app.setAttribute('id', 'app')
	document.body.appendChild(app)
}
