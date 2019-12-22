import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'
import CheckboxComponent from './checkbox.js'

export default class ToDoItemComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const button = new ButtonComponent({text: "&#10006;", id: `delete-btn-${this.props.item._id}`})
		const checkbox = new CheckboxComponent({id: `done-checkbox-${this.props.item._id}`, checked: this.props.item.completed})
		return `<div class='todo-list-item ${this.props.item.completed ? 'done' : ''}'>
			<div class="todo-list-item-done">${checkbox.render()}</div>
			<div class="todo-list-item-text">${this.props.item.text}</div>
			<div class="todo-list-item-delete">${button.render()}</div>
		</div>`
	}
}