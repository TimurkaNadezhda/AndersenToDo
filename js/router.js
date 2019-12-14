import LoginPage from './pages/login'
import ToDoPage from './pages/todo'

export default class Router {
	constructor() {
		this.routes = [LoginPage, ToDoPage]
		this.activeRoute = ToDoPage
	}
}