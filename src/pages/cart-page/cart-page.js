

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Counter } from '../../components/counter';

import './cart-page.scss';

import dish from '../../resources/img/restaurants/alpenhaus/0441.jpg';

export const CartPage = () => {
	return (
		<div className="cart-page">
			<Header />
			<div className="container">
				<div className="cart-page__wrap">
					<div className="cart-page__item">
						{/* Titles */}
						<p className="cart-page__title-item">Item</p>
						<p className="cart-page__title-quantity">Quantity</p>
						<p className="cart-page__title-prices">Price</p>
						{/* Add Item */}
						<div className="cart-page__image">
							<img src={dish} alt="dish" />
						</div>
						<h4 className="cart-page__name">Prawn Special</h4>
						<div className="cart-page__counter">
							<Counter />
						</div>
						<p className="cart-page__price">550.00 ₽</p>
					</div>
					<div className="cart-page__info">
						<div className="cart-page__text">Order Total :</div>
						<div className="cart-page__total">800.00 ₽</div>
					</div>
					<button className="btn btn__cart">Place Order</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

