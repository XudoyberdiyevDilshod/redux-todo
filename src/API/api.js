import axios from 'axios';

const BASE_URL = 'http://localhost:7070';

export const api = {
	userRegister: (user) => axios.post(BASE_URL + '/register', user),
	userLogin: (user) => axios.post(BASE_URL + '/login', user),
	getTodo: () => axios.get(BASE_URL + '/todos'),
	postTodo: (todo) => axios.post(BASE_URL + '/todos', todo),
	deleteTodo: (id) => axios.delete(BASE_URL + '/todos/' + id),
	updateTodo: (id, newText) => axios.put(BASE_URL + '/todos/' + id, newText),
};
