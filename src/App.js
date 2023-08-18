import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.css';
import { useSelector } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { setUser } from './redux/user/userAction';
import { useDispatch } from 'react-redux';
import { Todos } from './pages/Todos';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.token.token);

	dispatch(setToken(localStorage.getItem('token') || ''));
	dispatch(setUser(JSON.parse(localStorage.getItem('user')) || ''));

	if (token) {
		return (
			<Routes>
				<Route index path='/' element={<Todos />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path='register' element={<Register />} />
		</Routes>
	);
}

export default App;
