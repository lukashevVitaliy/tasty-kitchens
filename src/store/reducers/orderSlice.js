import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hooks";


const initialState = {
	orders: [],
	ordersLoadingStatus: null
}

export const addOrders = createAsyncThunk(
	'orders/addOrders',
	({ order, totalOrder }, { dispatch }) => {
		const { request } = useHttp();
		dispatch(orderFetched({ order, totalOrder }));

		return request("http://localhost:3001/orders", "POST", JSON.stringify({ order, totalOrder }));
	}
)

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		ordersFetching: state => {
			state.ordersLoadingStatus = "pending";
		},
		orderFetched: (state, action) => {
			state.orders.push(action.payload);
			state.ordersLoadingStatus = "fulfilled";
		},
		orderFetchingError: state => {
			state.ordersLoadingStatus = "rejected";
		}
	},
})

const { actions, reducer } = orderSlice;

export default reducer;

export const {
	ordersFetching,
	orderFetched,
	orderFetchingError
} = actions;