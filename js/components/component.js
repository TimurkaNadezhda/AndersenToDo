export default class Component {
	constructor(tag) {
		this.element = document.createElement(tag)
	}
	set element(value) {
    	this._element = value
    }
    get element() {
    	return this._element
    }
}