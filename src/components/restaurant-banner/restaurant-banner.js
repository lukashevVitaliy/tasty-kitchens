

import './restaurant-banner.scss';

import photo from '../../resources/img/restaurants/alpenhaus/0441.jpg';

export const RestaurantBanner = () => {
	return (
		<div className="restaurant-banner">
			<div className="container">
				<div className="restaurant-banner__wrap">
					<div className="restaurant-banner__image">
						<img src={photo} alt="restaurant" />
					</div>
					<div className="restaurant-banner__desc">
						<h2 className="restaurant-banner__title">Mc Donald’s</h2>
						<p className="restaurant-banner__cuisine">American, Fast Food, Snacks</p>
						<p className="restaurant-banner__location">TGF Variety Mall Kurnool, New Krishna Nagar</p>
						<div className="restaurant-banner__inner">
							<div className="restaurant-banner__rating">
								<span>★ ★ ★ ★ ★</span>
								<p>200+ Ratings</p>
							</div>
							<div className="restaurant-banner__costForTwo">
								<span>₽ 350</span>
								<p>Cost for two</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
