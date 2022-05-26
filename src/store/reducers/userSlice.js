import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hooks";


const initialState = {
	users: null,
	usersLogged: null,
	userLogin: null,
	usersLoggedStatus: null
}

export const addNewUser = createAsyncThunk(
	'users/addNewUser',
	(value, { dispatch }) => {
		const { request } = useHttp();
		dispatch(addUsers(value))

		return request("http://localhost:3001/users", "POST", JSON.stringify(value));
	}
)

export const loggedUsers = createAsyncThunk(
	'users/loggedUsers',
	() => {
		const { request } = useHttp();
		return request("http://localhost:3001/users");
	}
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUsers: (state, action) => {
			state.users = action.payload;
		},
		loginUser: (state, action) => {
			state.userLogin = action.payload;
		},
		logout: state => {
			state.userLogin = [];
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loggedUsers.pending, state => {
				state.usersLoggedStatus = 'pending'
			})
			.addCase(loggedUsers.fulfilled, (state, action) => {
				state.usersLoggedStatus = 'fulfilled';
				state.usersLogged = action.payload;
			})
			.addCase(loggedUsers.rejected, state => {
				state.usersLoggedStatus = 'rejected'
			})
			.addDefaultCase(() => { })
	}
})

const { actions, reducer } = usersSlice;

export default reducer;

export const { addUsers, logout, loginUser } = actions;