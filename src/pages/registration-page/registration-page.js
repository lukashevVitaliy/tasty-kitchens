import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { addNewUser } from '../../store/reducers/userSlice';

import logo from "../../resources/img/logo.svg";
import "./registration-page.scss";


export const RegistrationPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			password: ""
		},
		validationSchema: Yup.object().shape({
			name: Yup.string()
				.min(2, 'Минимум 2 символа!!!')
				.max(20, 'Максимум 20 символов!!!')
				.required('Обязательное поле!!!'),
			phone: Yup.string()
				.matches(phoneRegExp, 'Телефонный номер не корректный...')
				.required('Обязательное поле!!!'),

			password: Yup.string()
				.min(6, 'Минимум 6 символов!')
				.required('Обязательное поле!!!'),
		}),
		onSubmit: value => {
			dispatch(addNewUser({
				id: uuidv4(),
				name: value.name,
				phone: value.phone,
				password: value.password
			}))
			navigate("/restaurants")
		}
	})

	return (
		<div className="registration-page">
			<div className="registration-page__autorization">
				<form
					className="registration-page__form"
					onSubmit={formik.handleSubmit}
				>
					<div className="registration-page__logo">
						<img src={logo} alt="logo" />
						<p>Tasty Kitchens</p>
					</div>
					<h3 className="registration-page__title">Registration</h3>
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

					<label htmlFor="user">Phone contacts</label>
					<input
						id="phone"
						name="phone"
						type="number"
						value={formik.values.phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					{formik.errors.phone && formik.touched.phone ? <div className="error">{formik.errors.phone}</div> : null}

					<label htmlFor="password">password</label>
					<input
						id="password"
						name="password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					{formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}

					<button
						className="btn btn__form"
						type="submit"
					>Registration</button>
				</form>
			</div>
			<div className="registration-page__bg"></div>
		</div>
	)
}
