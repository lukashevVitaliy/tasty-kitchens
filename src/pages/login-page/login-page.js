import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { loggedUsers, loginUser } from '../../store/reducers/userSlice';

import logo from "../../resources/img/logo.svg";
import "./login-page.scss";


const LoginPage = () => {
	const usersLogged = useSelector(state => state.users.usersLogged);
	const userLogin = useSelector(state => state.users.userLogin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loggedUsers());
	}, [])

	useEffect(() => {
		if (userLogin) {
			const checkingRegisteredUsers = usersLogged.filter(item => (item.name === userLogin.name) && (item.password === userLogin.password));
			{ checkingRegisteredUsers.length > 0 ? navigate("/restaurants") : navigate("/registration") }
		}
	}, [userLogin])

	const formik = useFormik({
		initialValues: {
			name: "",
			password: ""
		},
		validationSchema: Yup.object().shape({
			name: Yup.string()
				.min(2, 'Минимум 2 символа!!!')
				.max(20, 'Максимум 20 символов!!!')
				.required('Обязательное поле!!!'),
			password: Yup.string()
				.min(6, 'Минимум 6 символов!')
				.required('Обязательное поле!!!'),
		}),
		onSubmit: value => dispatch(loginUser({
			id: uuidv4(),
			name: value.name,
			password: value.password
		}))
	})

	return (
		<div className="login-page">
			<div className="login-page__autorization">
				<form
					className="login-page__form"
					onSubmit={formik.handleSubmit}
				>
					<div className="login-page__logo">
						<img src={logo} alt="logo" />
						<p>Tasty Kitchens</p>
					</div>
					<h3 className="login-page__title">Login</h3>
					<label htmlFor="user">username</label>
					<input
						id="name"
						name="name"
						type="text"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					{formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}

					<label htmlFor="password">password</label>
					<input
						id="password"
						name="password"
						type="password"
						value={formik.values.pass}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					{formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}

					<button
						className="btn btn__form"
						type="submit"
						style={{ marginBottom: "15px" }}
					>Login</button>
					<Link to="registration" style={{ textAlign: "center" }} className="btn btn__form">Registration</Link>
				</form>

			</div>
			<div className="login-page__bg"></div>
		</div>
	)
}

export default LoginPage;
