class Api {
	async send(url, method, data) {
		const response = await fetch(`https://todo-app-back.herokuapp.com${url}`, {
			method,
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("token")
			}
		})
		const result = await response.json()
		if(response.ok) {
			return result
		} else {
			throw new Error(result.error)
		}
	}
}
export default new Api()
