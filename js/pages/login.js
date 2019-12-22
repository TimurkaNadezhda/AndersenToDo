import InputComponent from '../components/input.js'
import ButtonComponent from '../components/button.js'
import Page from './page.js'

export default class LoginPage extends Page {
	constructor(anchor) {
		super(anchor)
	}
	render() {
		const emailInput = new InputComponent({
			type: "email",
			label: "Email",
			id: "login-email"
		})
		const passwordInput = new InputComponent({
			type: "password",
			label: "Password",
			id: "password"
		})
		const button = new ButtonComponent({
			text: "Login",
			id: "login-button"
		})
		this.anchor.innerHTML = `<form class="login-form" id="login-form">
									<h3>Login</h3>
									${emailInput.render()}
									${passwordInput.render()}
									${button.render()}
									<p id="error"></p>
								</form>`
		this.anchor.querySelector("#login-form").addEventListener("submit", async (event) => {
			event.preventDefault()
			try {
				await this.store.dispatch("login", {
					"email": this.anchor.querySelector("#login-email").value,
					"password": this.anchor.querySelector("#password").value
				})
				this.router.changeRoute("todo")
			} catch(error) {
				this.anchor.querySelector("#error").innerText = error.message
			}
		})
	}
}