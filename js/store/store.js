import actions from "./actions.js"

export default {
	state: {
		todo: [],
		token: null
	},
	actions,
	async dispatch(action, payload) {
		if(this.actions[action]) {
			this.state = await this.actions[action](this.state, payload)
		}
	}
}