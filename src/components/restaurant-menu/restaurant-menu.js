import { ErrorMessage } from '../error-message';
import { v4 as uuidv4 } from 'uuid';

import { RestaurantMenuItem } from '../restaurant-menu-item';
import './restaurant-menu.scss';


export const RestaurantMenu = ({ dishes }) => {

	const renderDishes = (arr) => {
		if (arr.length === 0) {
			return <ErrorMessage />
		}
		return arr.map(dish => {
			return (
				<RestaurantMenuItem
					key={uuidv4()}
					dish={dish}
				/>
			)
		})
	}

	const element = renderDishes(dishes);


	return (
		<div className="restaurant-menu">
			{element}
		</div>
	)
}
