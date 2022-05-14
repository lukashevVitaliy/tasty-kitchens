import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ErrorMessage } from '../error-message';
import { RestaurantsItem } from '../restaurants-item';

import './restaurants-list.scss';


export const RestaurantsList = () => {
	const restaurants = useSelector(state => state.restaurants.restaurants);

	const renderRestaurants = (arr) => {
		if (arr.length === 0) {
			return <ErrorMessage />;
		}
		return arr.map(restaurant => {
			return (
				<RestaurantsItem
					key={uuidv4()}
					restaurant={restaurant}
				/>
			)
		})
	}

	const element = renderRestaurants(restaurants);


	return (
		<div className="restaurants-list">
			{element}
		</div>

	)
}
