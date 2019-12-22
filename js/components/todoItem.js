import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'

export default class ToDoItemComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<div class='todo-item'>
			${this.props.item.text}
		</div>`
	}
}