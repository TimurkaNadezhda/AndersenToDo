import Component from './component.js'

export default class InputComponent extends Component {
	constructor(type = 'text', label) {
		super('div')

		if(label) {
			this.label = document.createElement('label')
			this.label.innerText = label
			this.element.appendChild(this.label)
		}

		this.input = document.createElement("input")
		this.input.classList.add('input-class')
		this.input.type = type
		this.element.appendChild(this.input)
	}
	onChange(fn) {
      	this.element.addEventListener('change', fn)
    }
  	setValue(value) {
      	this.element.value = value
      	this.element.dispatchEvent(new Event('change'))
    }
}