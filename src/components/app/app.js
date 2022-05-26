import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Spinner } from '../spinner';
import store from '../../store/index';

const LoginPage = React.lazy(() => import('../../pages/login-page/login-page'));
const RegistrationPage = React.lazy(() => import('../../pages/registration-page/registration-page'));
const RestaurantsPage = React.lazy(() => import('../../pages/restaurants-page/restaurants-page'));
const RestaurantItemPage = React.lazy(() => import('../../pages/restaurant-item-page/restaurant-item-page'));
const CartPage = React.lazy(() => import('../../pages/cart-page/cart-page'));
const PaymentPage = React.lazy(() => import('../../pages/payment-page/payment-page'));
const EmptyPage = React.lazy(() => import('../../pages/empty-page/empty-page'));
const Page404 = React.lazy(() => import('../../pages/page-404/page-404'));


export const App = () => {

	return (
		<Provider store={store}>
			<Router>
				<div className="app">
					<Routes>
						<Route path="/" element={<Suspense fallback={<Spinner />}> <LoginPage /> </Suspense>} />
						<Route path="registration" element={<Suspense fallback={<Spinner />}><RegistrationPage /></Suspense>} />
						<Route path="restaurants" element={<Suspense fallback={<Spinner />}> <RestaurantsPage /> </Suspense>} />
						<Route path="restaurants/:name" element={<Suspense fallback={<Spinner />}> <RestaurantItemPage /> </Suspense>} />
						<Route path="cart" element={<Suspense fallback={<Spinner />}> <CartPage /> </Suspense>} />
						<Route path="payment" element={<Suspense fallback={<Spinner />}> <PaymentPage /> </Suspense>} />
						<Route path="empty" element={<Suspense fallback={<Spinner />}> <EmptyPage /> </Suspense>} />
						<Route path="*" element={<Suspense fallback={<Spinner />}> <Page404 /> </Suspense>} />
					</Routes>
				</div>
			</Router>
		</Provider>
	)
}

