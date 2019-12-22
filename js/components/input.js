import Component from './component.js'

export default class InputComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<div class='input'>
					${this.props.label ? `<label for="${this.props.id}">${this.props.label}</label>` : ''}
					<input id="${this.props.id}" type="${this.props.type || 'text'}"/>
				</div>`
	}
}