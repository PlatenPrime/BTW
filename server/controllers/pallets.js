

import Pallet from "../models/Pallet.js";
import User from "../models/User.js";



//Create Pallet

export const createPallet = async (req, res) => {
	try {
		const { title, positions } = req.body



		const newPallet = new Pallet({
			title, positions
		})


		await newPallet.save()

		return res.json(newPallet)

	} catch (error) {
		res.json({ message: "Что-то не так с паллетой" })
	}
}



