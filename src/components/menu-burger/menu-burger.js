import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { logout } from '../../store/reducers/userSlice';
import { LogoTop } from '../logo-top';

import './menu-burger.scss';


export const MenuBurger = () => {
	const [menuActive, setMenuActive] = useState(false);
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
		<>
			<div className={menuActive ? "menu-burger active" : "menu-burger"} onClick={() => setMenuActive(!menuActive)}>
				<div className="menu-burger__wrap" onClick={(e) => e.stopPropagation()}>
					<button
						className="menu-burger__close"
						onClick={() => setMenuActive(!menuActive)}
					>✗</button>
					<LogoTop id="logo-burger" />
					<nav>
						<ul className="menu-burger__list">
							{
								items.map(item => {
									return <li key={uuidv4()} className="menu-burger__list-link">
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
				</div>
				<div className="menu-burger__blur"></div>
			</div>
			<button
				className="burger"
				onClick={() => setMenuActive(!menuActive)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	)
}
