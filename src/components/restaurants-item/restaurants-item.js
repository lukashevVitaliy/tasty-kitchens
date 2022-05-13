

import './restaurants-item.scss';

import resto from "../../resources/img/restaurants/eshak/0501.jpg";

export const RestaurantsItem = () => {
	return (
		<div className="restaurants-item">
			<div className="restaurants-item__image">
				<img src={resto} alt="restaurant" />
			</div>
			<div className="restaurants-item__desc">
				<h4 className="restaurants-item__title">McDonald’s</h4>
				<p className="restaurants-item__cuisine">Fast Food</p>
				<div className="restaurants-item__rating">
					<span>★★★★★</span>
					<p>(222 rating)</p>
				</div>
			</div>
		</div>
	)
}
