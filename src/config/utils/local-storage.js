export const LocalStorage = {
	getItem(key) {
		return JSON.parse(localStorage.getItem(key))
	},

	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	},

	clear(key) {
		localStorage.removeItem(key)
	}
}
