import Component from './component.js'

export default class ButtonComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<button class='btn' id="${this.props.id}">${this.props.text}</button>`
	}
}