import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRestaurants } from '../../store/reducers/restaurantsSlice';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SliderPromo } from '../../components/slider-promo';
import { SortPanel } from '../../components/sort-panel';
import { RestaurantsList } from '../../components/restaurants-list';
import { Spinner } from '../../components/spinner';
import { ErrorMessage } from '../../components/error-message';

import './restaurants-page.scss';


export const RestaurantsPage = () => {
	const { restaurantsLoadingStatus } = useSelector(state => state.restaurants);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRestaurants())
	}, [])

	if (restaurantsLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (restaurantsLoadingStatus === 'error') {
		return <ErrorMessage />
	}

	return (
		<div className="restaurants-page">
			<Header />
			<div className="container">
				<SliderPromo />
				<h2 className="restaurants-page__title">Popular Restaurants</h2>
				<div className="restaurants-page__wrap">
					<p className="restaurants-page__subtitle">Select Your favourite restaurant special dish and make your day happy...</p>
					<SortPanel />
				</div>
				<p className="restaurants-page__line"></p>
				<RestaurantsList />
			</div>
			<Footer />
		</div>

	)
}
