

import './counter.scss';


export const Counter = () => {
	return (
		<div className="counter">
			<button className="counter__inc">-</button>
			<span className="counter__num">2</span>
			<button className="counter__dec">+</button>
		</div>
	)
}
