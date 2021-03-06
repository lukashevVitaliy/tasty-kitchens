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
		return request("http://localhost:3001/restaurants")
	}
)

const restaurantsSlice = createSlice({
	name: 'restaurants',
	initialState,
	reducers: {
		setCurrentRestaurant: (state, action) => {
			state.currentRestaurant = action.payload;
		},
		sortLowestRestaurants: (state, action) => {
			state.restaurants = action.payload;
		},
		sortHighestRestaurants: (state, action) => {
			state.restaurants = action.payload;
		},
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
	setCurrentRestaurant,
	sortLowestRestaurants,
	sortHighestRestaurants
} = actions;