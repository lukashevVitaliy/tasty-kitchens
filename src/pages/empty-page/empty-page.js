import { Link } from 'react-router-dom';
import { Header } from '../../components/header';

import './empty-page.scss';

import dish from '../../resources/img/dish.png';


const EmptyPage = () => {
	return (
		<div className="empty-page">
			<Header />
			<div className="empty-page__wrap">
				<div className="empty-page__image">
					<img src={dish} alt="dish" />
				</div>
				<h4 className="empty-page__title">No Orders Yet!</h4>
				<p className="empty-page__desc">
					Your cart is empty. Add something from the menu.
				</p>
				<Link to="/restaurants" className="btn btn__empty">Order Now</Link>
			</div>

		</div>
	)
}

export default EmptyPage;