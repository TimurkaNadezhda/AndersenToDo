
class ToDoFilterComponent {}
class ToDoListComponent {}

import Router from './router.js'

class Main {
	constructor(anchor) {
		this.anchor = anchor
		this.router = new Router()
		this.onInit()
	}
	onInit() {
		this.anchor.prepend(new this.router.activeRoute().element)

	}
}
new Main(document.querySelector("body"))