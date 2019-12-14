import AddToDoFormComponent from '../components/AddToDoForm.js'
import ToDoItemComponent from '../components/ToDoItem.js'

export default class ToDoPage {
	constructor() {
		this.element = document.createElement("div")
		this.element.classList.add("ToDo-form")

		const AddToDoForm = new AddToDoFormComponent()
		this.element.appendChild(AddToDoForm.element)

		const ToDoItem = new ToDoItemComponent()
		this.element.appendChild(ToDoItem.element)
	}

}