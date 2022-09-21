import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios.js";


const initialState = {
	pallets: [],
	loading: false,
}


export const createPallet = createAsyncThunk(
	'pallet/createPallet',
	async (params) => {
		try {
			const { data } = await axios.post('/pallets', params)
			return data
		} catch (error) {
			console.log(error)
		}
	},
)


export const getAllPallets = createAsyncThunk('pallet/getAllPallets', async () => {
	try {
		const { data } = await axios.get('/pallets')
		return data
	} catch (error) {
		console.log(error)
	}
})



export const removePallet = createAsyncThunk('pallet/removePallet', async (id) => {
	try {
		const { data } = await axios.delete(`/pallets/${id}`, id)
		return data
	} catch (error) {
		console.log(error)
	}
})







export const palletSlice = createSlice({
	name: "pallet",
	initialState,
	reducers: {

	},
	extraReducers: {


		// Создание паллеты
		[createPallet.pending]: (state) => {
			state.loading = true
		},
		[createPallet.fulfilled]: (state, action) => {
			state.loading = false
			state.pallets.push(action.payload)
		},
		[createPallet.rejected]: (state) => {
			state.loading = false
		},

		// Получение всех паллет

		[getAllPallets.pending]: (state) => {
			state.loading = true
		},
		[getAllPallets.fulfilled]: (state, action) => {
			state.loading = false
			state.pallets = action.payload.pallets
		},
		[getAllPallets.rejected]: (state) => {
			state.loading = false
		},

		// Удаление паллеты

		[removePallet.pending]: (state) => {
			state.loading = true
		},
		[removePallet.fulfilled]: (state, action) => {
			state.loading = false
			state.pallets = state.pallets.filter(
				(pallet) => pallet._id !== action.payload._id,
			)
		},
		[removePallet.rejected]: (state) => {
			state.loading = false
		},







	},



})



export default palletSlice.reducer;