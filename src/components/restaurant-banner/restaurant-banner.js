import './restaurant-banner.scss';


export const RestaurantBanner = ({ currentRestaurant }) => {
	const { image_url, name, cuisine, location, rating, total_reviews, cost_for_two } = currentRestaurant;


	return (
		<div className="restaurant-banner">
			<div className="container">
				<div className="restaurant-banner__wrap">
					<div className="restaurant-banner__image">
						<img src={image_url} alt={name} />
					</div>
					<div className="restaurant-banner__desc">
						<h2 className="restaurant-banner__title">{name}</h2>
						<p className="restaurant-banner__cuisine">{cuisine}</p>
						<p className="restaurant-banner__location">{location}</p>
						<div className="restaurant-banner__inner">
							<div className="restaurant-banner__rating">
								<span>{rating}</span>
								<p>{total_reviews} Ratings</p>
							</div>
							<div className="restaurant-banner__costForTwo">
								<span>{cost_for_two} ₽</span>
								<p>Cost for two</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
