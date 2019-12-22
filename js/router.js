import LoginPage from './pages/login.js'
import ToDoPage from './pages/todo.js'

class Router {
	constructor() {
		this.routes = [
			{
				name: "login",
				url: "login",
				component: LoginPage,
			},
			{
				name: "todo",
				url: "",
				component: ToDoPage,
			},	
		]
		this.activeRoute = localStorage.getItem("token") ? "todo" : "login"
	}
	changeRoute(route) {
		if(!this.routes.find(item => item.name === route)) {
			return
		}
		this.activeRoute = route
		document.dispatchEvent(new Event("change-route"))
	}
	getActiveRoute() {
		return this.routes.find(item => item.name === this.activeRoute)
	}
}
export default new Router()