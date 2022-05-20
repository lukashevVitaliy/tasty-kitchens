import './counter.scss';


export const Counter = ({ quantity, setQuantity }) => {
	const decQty = () => {
		if (quantity <= 1) return;

		const newQty = quantity - 1;
		setQuantity(newQty);
	}
	const incQty = () => {
		const newQty = quantity + 1;
		setQuantity(newQty);
	}



	return (
		<div className="counter">
			<button
				type="button"
				className="counter__dec"
				onClick={decQty}
			>-</button>
			<span className="counter__num">{quantity}</span>
			<button
				type="button"
				className="counter__inc"
				onClick={incQty}
			>+</button>
		</div>
	)
}
