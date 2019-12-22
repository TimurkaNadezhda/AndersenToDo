import AddToDoFormComponent from '../components/AddToDoForm.js'
import ToDoList from '../components/todoList.js'
import Page from './page.js'

export default class ToDoPage extends Page {
	constructor(anchor) {
		super(anchor)
		this.onInit()
	}
	async onInit() {
		await this.store.dispatch("getAllToDo")
	}
	render() {
		const list = new ToDoList({
			items: this.store.state.todo
		})
		this.anchor.innerHTML = `<div>
									<h1>ToDoList</h1>
									${list.render()}
								</div>`
	}

}