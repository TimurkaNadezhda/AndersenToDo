import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'

export default class ToDoItemComponent extends Component {
	constructor() {
		super('div')

		const button = new ButtonComponent("")
		this.element.appendChild(button.element)
		
		const input = new InputComponent("text")
		input.onChange(() => console.log('change'))
		this.element.appendChild(input.element)

		const button2 = new ButtonComponent("")
		this.element.appendChild(button2.element)
	}
}