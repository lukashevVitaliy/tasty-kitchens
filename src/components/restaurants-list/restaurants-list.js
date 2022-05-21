import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ErrorMessage } from '../error-message';
import { RestaurantsItem } from '../restaurants-item';
import { Pagination } from '../../components/pagination';
import { usePagination } from '../../hooks/usePagination';
import './restaurants-list.scss';


export const RestaurantsList = () => {
	const restaurants = useSelector(state => state.restaurants.restaurants);

	const {
		totalPages,
		nextPage,
		prevPage,
		firstContentIndex,
		lastContentIndex,
		page
	} = usePagination({
		contentPerPage: 9,
		count: restaurants.length,
	})

	const renderRestaurants = (arr) => {
		if (arr.length === 0) {
			return <ErrorMessage />;
		}
		return arr.slice(firstContentIndex, lastContentIndex)
			.map(restaurant => {
				return (
					<RestaurantsItem
						key={uuidv4()}
						restaurant={restaurant}
					/>
				)
			})
	}

	const elements = renderRestaurants(restaurants);


	return (
		<>
			<div className="restaurants-list">
				{elements}
			</div>
			<Pagination
				page={page}
				totalPages={totalPages}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</>
	)
}
