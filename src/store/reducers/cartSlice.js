import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	itemsInCart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsInCart: (state, action) => {
			state.itemsInCart.push({
				id: action.payload.dish.id,
				image_url: action.payload.dish.image_url,
				name: action.payload.dish.name,
				quantity: action.payload.quantity,
				cost: action.payload.dish.cost
			});
		},

		updateItemsInCart: (state, action) => {
			const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);

			if (itemIndex >= 0) {
				const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);
				state.itemsInCart[itemIndex].quantity = action.payload.quantity;
			}
		},
		updateItemsInCartCount: (state, action) => {
			const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);

			if (itemIndex >= 0) {
				const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);
				state.itemsInCart[itemIndex].quantity = action.payload.qty;
			}
		},
		deleteItemsInCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
		},
		resetCart: state => {
			state.itemsInCart = [];
		}

	}
})

const { actions, reducer } = cartSlice;

export default reducer;

export const {
	setItemsInCart,
	deleteItemsInCart,
	updateItemsInCart,
	updateItemsInCartCount,
	resetCart
} = actions;