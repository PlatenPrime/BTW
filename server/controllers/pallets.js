

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


// Get All Pallets

export const getAllPallets = async (req, res) => {
	try {
		const pallets = await Pallet.find().sort('-createdAt')


		if (!pallets) {
			return res.json({ message: 'Паллет нет' })
		}

		res.json({ pallets })
	} catch (error) {
		res.json({ message: 'Что-то не так с отображением паллет.' })
	}
}


// Remove pallet
export const removePallet = async (req, res) => {
	try {
		const pallet = await Pallet.findByIdAndDelete(req.params.id)
		if (!pallet) return res.json({ message: 'Такого паллеты не существует' })



		res.json({ message: 'Паллета была удалена.' })
	} catch (error) {
		res.json({ message: 'Что-то не так с удалением паллеты.' })
	}
}


