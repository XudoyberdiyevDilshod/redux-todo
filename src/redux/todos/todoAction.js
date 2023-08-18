import { REMOVE_TODO, SET_TODO, EDIT_TODO } from './todoType';

export const setTodo = (todo) => {
	return {
		type: SET_TODO,
		payload: todo,
	};
};

export const removeTodo = () => {
	return {
		type: REMOVE_TODO,
		payload: '',
	};
};

export const editTodo = (id, newText) => {
	return {
		type: EDIT_TODO,
		payload: { id, newText },
	};
};
