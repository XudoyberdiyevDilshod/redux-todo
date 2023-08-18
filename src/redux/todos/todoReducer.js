import { EDIT_TODO, REMOVE_TODO, SET_TODO } from './todoType';

const initialState = {
	todo: '',
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODO:
			return {
				...state,
				todo: action.payload,
			};
		case REMOVE_TODO:
			return {
				...state,
				todo: action.payload,
			};
		case EDIT_TODO:
			const updatedTodos = state.todo.map((el) =>
				el.id === action.payload.id ? action.payload.updatedTodo : el,
			);
			return {
				...state,
				todos: updatedTodos,
			};
		default:
			return state;
	}
};
