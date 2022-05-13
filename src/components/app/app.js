import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginPage } from "../../pages/login-page";
import { RestaurantsPage } from "../../pages/restaurants-page";
import { RestaurantItemPage } from "../../pages/restaurant-item-page";
import { CartPage } from "../../pages/cart-page";
import { PaymentPage } from "../../pages/payment-page";
import { EmptyPage } from "../../pages/empty-page";
import { Page404 } from "../../pages/page-404";


export const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="restaurants" element={<RestaurantsPage />}>
						<Route path=":name" element={<RestaurantItemPage />} />
					</Route>
					<Route path="cart" element={<CartPage />} />
					<Route path="payment" element={<PaymentPage />} />
					<Route path="empty" element={<EmptyPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</Router>

	)
}

