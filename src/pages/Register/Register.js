import { useRef } from 'react';
import './Register.css';
import { api } from '../../API/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/token/tokenAction';
import { setUser } from '../../redux/user/userAction';

export const Register = () => {
	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const inputPassRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const registerUser = async (user) => {
		const data = await api.userRegister(user);
		if (data.status === 201) {
			localStorage.setItem('token', data.data.accessToken);
			localStorage.setItem('user', JSON.stringify(data.data.user));
			dispatch(setToken(data.data.accessToken));
			dispatch(setUser(data.data.user));
			navigate('/');
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const userVal = {
			name: inputNameRef.current.value,
			email: inputEmailRef.current.value,
			password: inputPassRef.current.value,
		};
		registerUser(userVal);
	};

	return (
		<form onSubmit={handleSubmit} className=' w-50 mx-auto shadow p-5 mt-5 '>
			<h1 className='text-center'>Register</h1>
			<input
				ref={inputNameRef}
				className='form-control'
				type='text'
				name='username'
				placeholder='your name...'
				aria-label='your name'
			/>
			<input
				ref={inputEmailRef}
				className='form-control my-3'
				type='email'
				name='email'
				placeholder='your email...'
				aria-label='your email'
			/>
			<input
				ref={inputPassRef}
				className='form-control'
				type='password'
				name='password'
				placeholder='your password...'
				aria-label='your password'
			/>
			<button type='submit' className='btn btn-success mt-3'>
				Submit
			</button>
		</form>
	);
};
