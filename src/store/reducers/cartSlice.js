import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsInCart: (state, action) => {
			const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);

			if (itemIndex >= 0) {
				const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.dish.id);
				state.itemsInCart[itemIndex].quantity += action.payload.quantity;
			} else {
				state.itemsInCart.push({
					id: action.payload.dish.id,
					image_url: action.payload.dish.image_url,
					name: action.payload.dish.name,
					quantity: action.payload.quantity,
					totalPriceItem: action.payload.quantity * action.payload.dish.cost
				});
			}
		},
		deleteItemsInCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(dish => dish.id !== action.payload);
		}
	}
})

const { actions, reducer } = cartSlice;

export default reducer;

export const {
	setItemsInCart,
	deleteItemsInCart
} = actions;