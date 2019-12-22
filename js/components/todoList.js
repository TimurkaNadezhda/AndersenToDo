import Component from './component.js'
import todoItem from "./todoItem.js"

export default class ToDoList extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<div class='todo-list'>
					${this.props.items.map(item => {
						const todo = new todoItem({item})
						return todo.render()
					}).join("")}
				</div>`
	}
}