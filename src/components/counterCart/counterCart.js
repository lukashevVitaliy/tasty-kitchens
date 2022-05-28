import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItemsInCartCount } from '../../store/reducers/cartSlice';

import './counterCart.scss';


export const CounterCart = ({ id, name, image_url, cost, quantity }) => {
	const [qty, setQty] = useState(quantity);
	const dispatch = useDispatch();
	const dish = { ...{ id, name, image_url, cost } };

	useEffect(() => {
		if (qty > quantity || qty < quantity) {
			updateCounterCart();
		}
	}, [qty])

	const decQty = () => {
		if (qty <= 1) return;

		const newQty = qty - 1;
		setQty(newQty);
	}
	const incQty = () => {
		const newQty = qty + 1;
		setQty(newQty);
	}

	const updateCounterCart = () => {
		dispatch(updateItemsInCartCount({ dish, qty }))
	}


	return (
		<div className="counter">
			<button
				type="button"
				className="counter__dec"
				onClick={decQty}
			>-</button>
			<span className="counter__num">{qty}</span>
			<button
				type="button"
				className="counter__inc"
				onClick={incQty}
			>+</button>
		</div>
	)
}
