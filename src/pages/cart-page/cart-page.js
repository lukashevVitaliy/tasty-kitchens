import { React, createRef } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { deleteItemsInCart, resetCart } from '../../store/reducers/cartSlice';
import { addOrders } from '../../store/reducers/orderSlice';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { CounterCart } from '../../components/counterCart';
import { useNavigate } from 'react-router-dom';

import './cart-page.scss';


const CartPage = () => {
	const itemsInCart = useSelector(state => state.cart.itemsInCart);
	const statusLoading = useSelector(state => state.order.ordersLoadingStatus);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (itemsInCart.length === 0) {
			navigate("/empty");
		}
	}, [itemsInCart]);

	useEffect(() => {
		if (statusLoading === 'fulfilled') {
			dispatch(resetCart(itemsInCart));
			navigate("/payment");
		}
	}, [statusLoading])

	const handleClick = (id) => {
		dispatch(deleteItemsInCart(id));
	}

	const renderItems = (arr) => {
		return arr.map(product => {
			const { id, name, image_url, cost, quantity } = product;
			const totalItemPrice = quantity * cost;
			const productRef = createRef(null);

			return {
				totalItemPrice,
				tmpl: (
					<CSSTransition
						key={id}
						timeout={500}
						classNames="order"
						nodeRef={productRef}
					>
						<li key={uuidv4()} className="cart-page__link" ref={productRef} >
							<div className="cart-page__image">
								<img src={image_url} alt={name} />
							</div>
							<h4 className="cart-page__name">{name}</h4>
							<div className="cart-page__counter">
								<CounterCart
									id={id}
									name={name}
									image_url={image_url}
									cost={cost}
									quantity={quantity}
								/>
							</div>
							<p className="cart-page__price">{totalItemPrice} ₽
								<span><button type="button" style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleClick(id)}>✗</button></span>
							</p>
						</li>
					</CSSTransition>
				)
			}
		})
	}

	const products = renderItems(itemsInCart);

	const arrTotalItems = products.map(p => p.totalItemPrice);
	const totalOrder = arrTotalItems.reduce((acc, product) => acc += product, 0);
	const totalOrderConvert = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(totalOrder);

	const sendOrder = () => {
		if (itemsInCart.length > 0) {
			const totalOrder = totalOrderConvert;
			const order = itemsInCart.map(item => {
				return {
					id: item.id,
					name: item.name,
					quantity: item.quantity
				}
			})
			dispatch(addOrders({ order, totalOrder }));
		}
	}


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

						{/* <TransitionGroup component="ul" >
							{products.map(p => p.tmpl)}
						</TransitionGroup> */}

						{/* <ul className="cart-page__list">
							{products.map(p => p.tmpl)}
						</ul> */}

					</div>
					<TransitionGroup component="ul" className="cart-page__list">
						{products.map(p => p.tmpl)}
					</TransitionGroup>
					<div className="cart-page__info">
						<div className="cart-page__text">Order Total :</div>
						<div className="cart-page__total">{totalOrderConvert}</div>
					</div>
					<button
						className="btn btn__cart"
						onClick={sendOrder}
					>Place Order</button>

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default CartPage;