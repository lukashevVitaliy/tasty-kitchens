import { useSelector } from 'react-redux';

import { Header } from '../../components/header';
import { RestaurantBanner } from '../../components/restaurant-banner';
import { RestaurantMenu } from '../../components/restaurant-menu';
import { Footer } from '../../components/footer';
import './restaurant-item-page.scss';


const RestaurantItemPage = () => {
	const currentRestaurant = useSelector(state => state.restaurants.currentRestaurant.restaurant);
	const dishes = useSelector(state => state.restaurants.currentRestaurant.restaurant.food_items);

	return (
		<div className="restaurant-item-page">
			<Header />
			<RestaurantBanner currentRestaurant={currentRestaurant} />
			<div className="container">
				<RestaurantMenu dishes={dishes} />
			</div>
			<Footer />
		</div>
	)
}

export default RestaurantItemPage;