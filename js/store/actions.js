import api from "../api.js"

export default {
	login: async (state, payload) => {
		try {
			const response = await api.send("/login", "POST", payload)
			localStorage.setItem("token", response.token)
			return {
				...state,
				token: response.token
			}
		} catch(error) {
			throw error
		}
	},
	getAllToDo: async (state) => {
		try {
			const response = await api.send("/todos", "GET")
			return {
				...state,
				todo: response
			}
		} catch(error) {
			throw error
		}
	},
	addToDo: async (state, payload) => {
		try {
			const response = await api.send("/todos", "POST", payload)
			return {
				...state,
				todo: [
					...state.todo,
					response
				]
			}
		} catch(error) {
			throw error
		}
	},
	deleteToDo: async (state, payload) => {
		try {
			await api.send(`/todos/${payload.id}`, "DELETE")
			return {
				...state,
				todo: state.todo.filter(item => item._id !== payload.id)
			}
		} catch(error) {
			throw error
		}
	},
	editToDo: async (state, payload) => {
		try {
			const response = await api.send(`/todos/${payload.id}`, "PUT", payload.data)
			return {
				...state,
				todo: state.todo.map(item => payload.id === item._id ? response : item)
			}
		} catch(error) {
			throw error
		}
	},

}