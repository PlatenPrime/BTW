import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
	title: { type: String, required: true },
	pallets: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'Pallet', required: true },
	],
},
	{ timestamps: true },


)


export default mongoose.model("Art", ArtSchema);