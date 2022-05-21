import { ErrorMessage } from '../error-message';
import { v4 as uuidv4 } from 'uuid';

import { RestaurantMenuItem } from '../restaurant-menu-item';
import { Pagination } from '../../components/pagination';
import { usePagination } from '../../hooks/usePagination';
import './restaurant-menu.scss';


export const RestaurantMenu = ({ dishes }) => {

	const {
		totalPages,
		nextPage,
		prevPage,
		firstContentIndex,
		lastContentIndex,
		page
	} = usePagination({
		contentPerPage: 10,
		count: dishes.length,
	})

	const renderDishes = (arr) => {
		if (arr.length === 0) {
			return <ErrorMessage />
		}
		return arr.slice(firstContentIndex, lastContentIndex)
			.map(dish => {
				return (
					<RestaurantMenuItem
						key={uuidv4()}
						dish={dish}
					/>
				)
			})
	}

	const elements = renderDishes(dishes);


	return (
		<>
			<ul className="restaurant-menu">
				{elements}
			</ul>
			<Pagination
				page={page}
				totalPages={totalPages}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</>
	)
}
