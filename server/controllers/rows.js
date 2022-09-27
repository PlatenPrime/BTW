

import Pallet from "../models/Row.js";





//Create Row

export const createRow = async (req, res) => {
	try {
		const { title, pallets } = req.body



		const newRow = new Row({
			title, pallets
		})


		await newRow.save()

		return res.json(newRow)

	} catch (error) {
		res.json({ message: "Что-то не так с созданием ряда" })
	}
}



