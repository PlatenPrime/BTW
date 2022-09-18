import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import palletSlice from "./features/pallet/palletSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		pallet: palletSlice,
	}
})