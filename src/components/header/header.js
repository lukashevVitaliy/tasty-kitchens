import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { logout } from '../../store/reducers/userSlice';
import logo from '../../resources/img/logo.svg';
import './header.scss';


export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const items = [
		{ value: 'Home', to: '/restaurants' },
		{ value: 'Cart', to: '/cart' }
	]

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		navigate('/');
	}

	return (
		<header>
			<div className="container">
				<div className="header">
					<Link to="/restaurants" className="header__logo">
						<img src={logo} alt="logo" />
						<span>Tasty Kitchens</span>
					</Link>
					<nav className="header__menu">
						<ul className="header__list">
							{
								items.map(item => {
									return <li key={uuidv4()} className="header__list-link">
										<NavLink to={item.to} style={({ isActive }) => ({ color: isActive && '#f7931e' })}
										>{item.value}</NavLink>
									</li>
								})
							}
						</ul>
						<button
							className="btn"
							onClick={(e) => handleLogout(e)}
						>Logout</button>
					</nav>
				</div>
			</div>
		</header>
	)
}
