import InputComponent from '../components/input'
import ButtonComponent from '../components/button'

export default class LoginPage {
	constructor() {
		this.element = document.createElement("div")
		this.element.classList.add('login-form')

		const header = document.createElement("h3")
		header.innerText = "Login"
		this.element.appendChild(header)

		const input = new InputComponent('text', 'Login')
		input.onChange(() => console.log('change'))
		this.element.appendChild(input.element)

		const password = new InputComponent('password', 'Password')
		password.onChange(() => console.log('change'))
		this.element.appendChild(password.element)

		const button = new ButtonComponent("Login")
		this.element.appendChild(button.element)
	}
}