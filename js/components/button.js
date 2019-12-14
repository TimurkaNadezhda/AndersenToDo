import Component from './component.js'

export default class ButtonComponent extends Component {
	constructor(text) {
		super("button")
		this.element.innerText = text
	}
}