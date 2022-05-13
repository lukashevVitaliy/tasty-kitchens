import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import logo from '../../resources/img/logo.svg';
import './header.scss';


export const Header = () => {

	const items = [
		{ value: 'Home', to: '/restaurants' },
		{ value: 'Cart', to: '/cart' }
	]

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
						<Link to="/" className="btn">Logout</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
