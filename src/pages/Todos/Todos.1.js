import React, { useEffect, useRef } from 'react';
import { api } from '../../API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../../redux/todos/todoAction';

export const Todos = () => {
	const inputRef = useRef();

	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todos.todo);

	const todoPost = async (todo) => {
		const data = await api.postTodo(todo);
		if (data.status === 201) {
			getTodos();
		}
	};

	const getTodos = async () => {
		const data = await api.getTodo();
		if (data.status === 200) {
			dispatch(setTodo(data.data));
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const value = {
			text: inputRef.current.value,
			isCompleted: false,
		};
		todoPost(value);
		inputRef.current.value = '';
	};

	const handleDelete = async (id) => {
		const data = await api.deleteTodo(id);
		if (data.status === 200) {
			getTodos();
		}
	};
	const handleEdit = async (id) => {
		const newText = prompt('Text kiriting');
		let findedTodo = todo.map((todo) => todo.id === id);
		console.log(findedTodo);
		// findedTodo.name = newText;
		// dispatch(editTodo(newText));
	};

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1 className='text-center my-5'>Todo</h1>
			<form
				className='w-50 mx-auto rounded input-group shadow p-5 mt-5'
				onSubmit={handleSubmit}
			>
				<input
					ref={inputRef}
					type='text'
					name='todo'
					placeholder='todo...'
					className='form-control'
				/>
				<button className='btn btn-primary' type='submit'>
					Submit
				</button>
			</form>

			{todo.length ? (
				<ul className='w-50 mx-auto mt-5 list-unstyled'>
					{todo.map((item) => (
						<li
							key={item.id}
							className='input-group d-flex align-items-center gap-4 mb-2'
						>
							<span>{item.id}.</span>
							<p className='m-0'>{item.text}</p>
							<button
								className='btn btn-success rounded-5'
								onClick={() => handleEdit(item.id)}
							>
								Edit
							</button>
							<button
								className='btn btn-danger rounded-5'
								onClick={() => handleDelete(item.id)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</>
	);
};
