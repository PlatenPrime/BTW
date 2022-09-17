import mongoose from "mongoose";


const PalletSchema = new mongoose.Schema({
	title: { type: String, required: true },
	positions: [{
		art: { type: String, required: true },
		pieces: { type: Number, required: true },
	}]
},
	{ timestamps: true },


)


export default mongoose.model("Pallet", PalletSchema);