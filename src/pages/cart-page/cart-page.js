import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { deleteItemsInCart, resetCart } from '../../store/reducers/cartSlice';
import { addOrders } from '../../store/reducers/orderSlice';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { CounterCart } from '../../components/counterCart';
import { useNavigate } from 'react-router-dom';

import './cart-page.scss';


export const CartPage = () => {
	const items = useSelector(state => state.cart.itemsInCart);
	const statusLoading = useSelector(state => state.order.ordersLoadingStatus);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (items.length === 0) {
			navigate("/empty");
		}
	}, []);

	useEffect(() => {
		if (statusLoading === 'fulfilled') {
			dispatch(resetCart(items));
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

			return {
				totalItemPrice,
				tmpl: (
					<li key={uuidv4()} className="cart-page__link" >
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
				)
			}
		})
	}

	const products = renderItems(items);

	const arrTotalItems = products.map(p => p.totalItemPrice);
	const totalOrder = arrTotalItems.reduce((acc, product) => acc += product, 0);
	const totalOrderConvert = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(totalOrder);


	const sendOrder = () => {
		const totalOrder = totalOrderConvert;
		const order = items.map(item => {
			return {
				id: item.id,
				name: item.name,
				quantity: item.quantity
			}
		})
		dispatch(addOrders({ order, totalOrder }));
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
						<ul className="cart-page__list">
							{products.map(p => p.tmpl)}
						</ul>
					</div>
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