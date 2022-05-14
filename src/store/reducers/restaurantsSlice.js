import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hooks";


const initialState = {
	restaurants: [],
	restaurantsLoadingStatus: 'idle',
	currentRestaurant: {}
}

export const fetchRestaurants = createAsyncThunk(
	'fetch/fetchRestaurants',
	() => {
		const { request } = useHttp();
		return request("http://localhost:3001/restaurants?_limit=9")
	}
)

const restaurantsSlice = createSlice({
	name: 'restaurants',
	initialState,
	reducers: {
		// restaurantsFetching: state => {
		// 	state.restaurantsLoadingStatus = 'loading';
		// },
		// restaurantsFetched: (state, action) => {
		// 	state.restaurantsLoadingStatus = 'idle';
		// 	state.restaurants = action.payload;
		// },
		// restaurantsFetchingError: state => {
		// 	state.restaurantsLoadingStatus = 'error';
		// },
		setCurrentRestaurant: (state, action) => {
			state.currentRestaurant = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRestaurants.pending, state => {
				state.restaurantsLoadingStatus = 'loading';
			})
			.addCase(fetchRestaurants.fulfilled, (state, action) => {
				state.restaurantsLoadingStatus = 'idle';
				state.restaurants = action.payload;
			})
			.addCase(fetchRestaurants.rejected, state => {
				state.restaurantsLoadingStatus = 'error';
			})
			.addDefaultCase(() => { })
	}
})

const { actions, reducer } = restaurantsSlice;

export default reducer;

export const {
	restaurantsFetching,
	restaurantsFetched,
	restaurantsFetchingError,
	setCurrentRestaurant
} = actions;