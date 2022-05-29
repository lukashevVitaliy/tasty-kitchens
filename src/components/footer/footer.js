import { FaPinterestSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

import logo from '../../resources/img/logo_footer.svg';
import './footer.scss';


export const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="footer__logo">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<span>Tasty Kitchens</span>
				</div>
				<p className="footer__info">The only thing we are serious about is food.<br />Contact us on</p>
				<ul className="footer__social">
					<li className="footer__social-item">
						<a href="#" className="footer__social-link"><FaPinterestSquare /></a>
					</li>
					<li className="footer__social-item">
						<a href="#" className="footer__social-link"><FaInstagram /></a>
					</li>
					<li className="footer__social-item">
						<a href="#" className="footer__social-link"><FaTwitter /></a>
					</li>
					<li className="footer__social-item">
						<a href="#" className="footer__social-link"><FaFacebookSquare /></a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
