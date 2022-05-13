
import { Counter } from '../counter';

import './restaurant-menu-item.scss';
import dish from '../../resources/img/restaurants/alpenhaus/0450.jpg';

export const RestaurantMenuItem = () => {
	return (
		<div className="restaurant-menu-item">
			<div className="restaurant-menu-item__image">
				<img src={dish} alt="dish" />
			</div>
			<div className="restaurant-menu-item__desc">
				<h4 className="restaurant-menu-item__title">Chicken Roast</h4>
				<p className="restaurant-menu-item__price">₽ 350.00</p>
				<span className="restaurant-menu-item__rating">★ ★ ★ ★ ★</span>
				<button className="btn btn__menu">Add</button>
				<Counter />
			</div>
		</div>
	)
}
