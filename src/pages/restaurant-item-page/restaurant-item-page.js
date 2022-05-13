

import { Header } from '../../components/header';
import { RestaurantBanner } from '../../components/restaurant-banner';
import { RestaurantMenu } from '../../components/restaurant-menu';
import { Footer } from '../../components/footer';
import './restaurant-item-page.scss';


export const RestaurantItemPage = () => {
	return (
		<div className="restaurant-item-page">
			<Header />
			<RestaurantBanner />
			<div className="container">
				<RestaurantMenu />
			</div>
			<Footer />
		</div>
	)
}
