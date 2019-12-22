import AddToDoForm from '../components/addTodoForm.js'
import ToDoList from '../components/todoList.js'
import ToDoFilters from '../components/todoFilters.js'
import Page from './page.js'

export default class ToDoPage extends Page {
	constructor(anchor) {
		super(anchor)
		this.filter = 'all'
		this.items = []
	}
	async onInit() {
		await this.store.dispatch("getAllToDo")
	}
	render() {
		if (this.filter === 'active') {
			this.items = this.store.state.todo.filter(item => !item.completed)
		} else if (this.filter === 'finished') {
			this.items = this.store.state.todo.filter(item => item.completed)
		} else {
			this.items = this.store.state.todo
		}
		const form = new AddToDoForm()
		const list = new ToDoList({ items: this.items })
		const filters = new ToDoFilters({
			items: this.store.state.todo,
			activeFilter: this.filter
		})
		this.anchor.innerHTML = `<div class='todo-page'>
									<h1>To-do list</h1>
									<div class='card'>
										${form.render()}
									</div>
									<div class='card'>
										${filters.render()}
										${list.render()}
									</div>
								</div>`
		this.anchor.querySelector("#add-todo-form").addEventListener("submit", async (event) => {
			event.preventDefault() 
			await this.store.dispatch("addToDo", {text: this.anchor.querySelector("#add-todo-input").value})
			this.render()
		})
		this.anchor.querySelectorAll(".todo-list-item-delete button").forEach(button => {
			button.addEventListener("click", async (event) => {
				event.preventDefault() 
				const id = event.target.id.replace('delete-btn-','')
				await this.store.dispatch("deleteToDo", {id})
				this.render()
			})
		})
		this.anchor.querySelectorAll(".todo-list-item-done input").forEach(button => {
			button.addEventListener("change", async (event) => {
				event.preventDefault() 
				const id = event.target.id.replace('done-checkbox-','')
				await this.store.dispatch("editToDo", {id, data: {completed: event.target.checked}})
				this.render()
			})
		})
		this.anchor.querySelectorAll(".todo-list-filters li").forEach(li => {
			li.addEventListener("click", (event) => {
				event.preventDefault() 
				this.filter = event.target.id.replace('filter-item-','')
				this.render()
			})
		})
	}

}