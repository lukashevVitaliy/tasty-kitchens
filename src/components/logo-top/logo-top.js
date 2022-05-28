import { Link } from 'react-router-dom';

import './logo-top.scss';
import logo from '../../resources/img/logo.svg';


export const LogoTop = () => {
	return (
		<div className="logo-top">
			<Link to="/restaurants" className="logo-top__logo">
				<div>
					<img src={logo} alt="logo" />
				</div>
				<span>Tasty Kitchens</span>
			</Link>
		</div>
	)
}
