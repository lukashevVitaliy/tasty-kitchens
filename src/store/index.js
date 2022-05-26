import { configureStore } from "@reduxjs/toolkit";

import restaurants from '../store/reducers/restaurantsSlice';
import cart from '../store/reducers/cartSlice';
import order from '../store/reducers/orderSlice';
import users from '../store/reducers/userSlice';

const store = configureStore({
	reducer: { restaurants, cart, order, users },
	devTools: process.env.NODE_ENV !== 'production'
})

export default store;