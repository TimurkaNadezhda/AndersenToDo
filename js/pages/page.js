import store from "../store/store.js"
import router from "../router.js"

export default class Page {
	constructor(anchor) {
		this.store = store
		this.anchor = anchor
		this.router = router
	}
	onInit() {}
}