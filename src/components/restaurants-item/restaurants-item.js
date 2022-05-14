import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentRestaurant } from '../../store/reducers/restaurantsSlice';

import './restaurants-item.scss';


export const RestaurantsItem = ({ restaurant }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const { image_url, name, cuisine, rating, total_reviews } = restaurant;

	const handleClick = (e) => {
		e.stopPropagation();
		dispatch(setCurrentRestaurant({ restaurant }));
		navigate(name);
	}

	return (
		<div
			className="restaurants-item"
			onClick={handleClick}
		>
			<div className="restaurants-item__image">
				<img src={image_url} alt={name} />
			</div>
			<div className="restaurants-item__desc">
				<h4 className="restaurants-item__title">{name}</h4>
				<p className="restaurants-item__cuisine">{cuisine}</p>
				<div className="restaurants-item__rating">
					<span>{rating}</span>
					<p>({total_reviews} rating)</p>
				</div>
			</div>
		</div>
	)
}

