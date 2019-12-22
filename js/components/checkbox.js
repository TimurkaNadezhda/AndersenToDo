import Component from './component.js'

export default class CheckboxComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<label class="input-checkbox">
					<input type="checkbox" id="${this.props.id}" ${this.props.checked ? 'checked="checked"' : ''}/>
					<span class="checkmark"></span>
				</label>`
	}
}