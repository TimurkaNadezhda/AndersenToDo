import router from './router.js'

class Main {
	constructor(anchor) {
		this.anchor = anchor
		document.addEventListener("change-route", () => this.render())
		this.render()
	}
	async render() {
		const activeRoute = router.getActiveRoute()
		const activePage = new activeRoute.component(this.anchor)
		await activePage.onInit()
		activePage.render()
	}
}
new Main(document.querySelector("#app"))
