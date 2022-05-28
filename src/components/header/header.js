import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { logout } from '../../store/reducers/userSlice';
import { MenuBurger } from '../menu-burger';
import { LogoTop } from '../logo-top';

import './header.scss';


export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const items = [
		{ value: 'Home', to: '/restaurants' },
		{ value: 'Cart', to: '/cart' }
	]

	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
	}

	return (
		<header>
			<div className="container">
				<div className="header">
					<LogoTop />
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
							onClick={handleLogout}
						>Logout</button>
					</nav>
					<MenuBurger />
				</div>
			</div>
		</header>
	)
}
