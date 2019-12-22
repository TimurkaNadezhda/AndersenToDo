import AddToDoForm from '../components/addTodoForm.js'
import ToDoList from '../components/todoList.js'
import Page from './page.js'

export default class ToDoPage extends Page {
	constructor(anchor) {
		super(anchor)
	}
	async onInit() {
		await this.store.dispatch("getAllToDo")
	}
	render() {
		const form = new AddToDoForm()
		const list = new ToDoList({
			items: this.store.state.todo
		})
		this.anchor.innerHTML = `<div class='todo-page'>
									<h1>To-do list</h1>
									<div class='card'>
										${form.render()}
									</div>
									<div class='card'>
										${list.render()}
									</div>
								</div>`
		this.anchor.querySelector("#add-todo-form").addEventListener("submit", async (event) => {
			event.preventDefault() 
			await this.store.dispatch("addToDo", {text: this.anchor.querySelector("#add-todo-input").value})
			this.render()
		})
	}

}