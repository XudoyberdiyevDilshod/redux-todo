import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { todoReducer } from './todos/todoReducer';
import { tokenReducer } from './token/tokenReducer';

export const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer,
	token: tokenReducer,
});
