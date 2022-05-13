
import logo from "../../resources/img/logo.svg";
import "./login-page.scss";


export const LoginPage = () => {
	return (
		<div className="login-page">
			<div className="login-page__autorization">
				<form className="login-page__form" >
					<div className="login-page__logo">
						<img src={logo} alt="logo" />
						<p>Tasty Kitchens</p>
					</div>
					<h3 className="login-page__title">Login</h3>
					<label htmlFor="user">username</label>
					<input name="user" type="text" />
					<label htmlFor="pass">password</label>
					<input name="pass" type="text" />
					<button
						className="btn btn__form"
						type="submit"
					>Login</button>
				</form>
			</div>
			<div className="login-page__bg"></div>
		</div>
	)
}
