import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'

export default class AddToDoFormComponent extends Component {
	constructor() {
		super('div')

		const input = new InputComponent("text")
		input.onChange(() => console.log('change'))
		this.element.appendChild(input.element)

		const button = new ButtonComponent("Add")
		this.element.appendChild(button.element)
	}
}