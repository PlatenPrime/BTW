import React from 'react';
import { useState } from 'react';








const PalletPositionAdd = ({ positions, setPositions }) => {

	const [isPositionAdding, setIsPositionAdding] = useState(false);
	const [newPosition, setNewPosition] = useState("")
	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState("");




	const addPosition = () => {

		const position = {
			id: positions.length === 0 ? 1 : positions[positions.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPositions(art && pieces ? [...positions, position] : positions);
		setArt("");
		setPieces("");
		console.log(positions)

	}


	// PositionsAdd Handlers

	const handlerPositionAddSave = () => {
		addPosition()
	}

	const handlerPositionAddAdd = () => {
		setIsPositionAdding(true)
	}


	const handlerPositionAddCancel = () => {
		setIsPositionAdding(false)
	}



	return (

		<div className='w-full'>



			{isPositionAdding ?

				<div className='flex justify-between p-2 my-3'>




					<div
						className='w-4/5'
					>

						<input type="text"
							className='text-black rounded-md pl-2 bg-white p-3  outline-none mx-2'
							value={art}
							onChange={(e) => setArt(e.target.value)}

						/>

						<input type="number"
							className='text-black rounded-md pl-2 bg-white p-3   outline-none mx-2'
							value={pieces}
							onChange={(e) => setPieces(e.target.value)}
						/>




					</div>


					<div className='w-1/5 ' >
						<button
							className='   bg-green-600 text-white p-3 rounded-lg mx-2 '
							onClick={handlerPositionAddSave}
						>Save</button>
						<button
							className='   bg-white text-red-600 p-3 rounded-lg mx-2'
							onClick={handlerPositionAddCancel}
						>Cancel</button>
					</div>


				</div>




				:






				<div className='p-2 my-3'>
					<button
						className=' w-full bg-yellow-300 p-3 rounded-lg  '
						onClick={handlerPositionAddAdd}
					>Add</button>
				</div>



			}


		</div>
	);
};

export default PalletPositionAdd;