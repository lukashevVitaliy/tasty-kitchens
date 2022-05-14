import { configureStore } from "@reduxjs/toolkit";

import restaurants from '../store/reducers/restaurantsSlice';
import cart from '../store/reducers/cartSlice';

const store = configureStore({
	reducer: { restaurants, cart },
	devTools: process.env.NODE_ENV !== 'production'
})

export default store;