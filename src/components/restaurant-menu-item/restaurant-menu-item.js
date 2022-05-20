import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { setItemsInCart, updateItemsInCart } from '../../store/reducers/cartSlice';
import { Counter } from '../counter';

import './restaurant-menu-item.scss';


export const RestaurantMenuItem = ({ dish }) => {
	const [quantity, setQuantity] = useState(1);
	const [buttonAdd, setButtonAdd] = useState(false);
	const dispatch = useDispatch();


	useEffect(() => {
		if (quantity > 1) {
			updateDish();
		}

	}, [quantity])

	const { name, image_url, rating, cost } = dish;

	const handleClick = () => {
		setButtonAdd({ buttonAdd: !buttonAdd });
		dispatch(setItemsInCart({ dish, quantity }));
	}

	const updateDish = () => {
		dispatch(updateItemsInCart({ dish, quantity }));
	}



	return (
		<li key={uuidv4()} className="restaurant-menu-item">
			<div className="restaurant-menu-item__image">
				<img src={image_url} alt={name} />
			</div>
			<div className="restaurant-menu-item__desc">
				<h4 className="restaurant-menu-item__title">{name}</h4>
				<p className="restaurant-menu-item__price">{cost} ₽</p>
				<span className="restaurant-menu-item__rating">{rating}</span>

				{
					!buttonAdd ?
						<button
							className="btn btn__menu"
							onClick={handleClick}
						>Add</button> :
						<Counter quantity={quantity} setQuantity={setQuantity} />
				}
			</div>
		</li>
	)
}
