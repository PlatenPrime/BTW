import React, { useEffect, useState } from 'react';




const PalletPosition = ({ positions, setPositions, isPalletEditing, art, pieces, id }) => {



	// States

	const [isPositionEditing, setIsPositionEditing] = useState(false);

	const [newArt, setNewArt] = useState("");
	const [newPieces, setNewPieces] = useState("");



	useEffect(() => {
		setNewArt(art)
		setNewPieces(pieces)
	}, [art, pieces])





	// Position CRUD

	const deletePosition = (id) => {
		window.confirm("Удалить эту позицию с паллеты?") &&
			setPositions(positions.filter((position) => position.id !== id));

	};


	const updatePosition = (id) => {
		setPositions(

			positions.map((position) => {
				if (position.id === id) {
					const art = newArt;
					const pieces = newPieces;
					return { ...position, art, pieces }
				} else {
					return position;
				}
			})

		)
	}


	// Position handlers


	const handlerPositionEdit = (id) => {
		setIsPositionEditing(true)
	}

	const handlerPositionSave = (id) => {
		updatePosition(id)
		setIsPositionEditing(false)
	}

	const handlerPositionDelete = (id) => {
		deletePosition(id)
	}





	return (



		<div className="text-white text-lg flex border m-1 justify-between">



			{isPalletEditing && isPositionEditing ?


				<div>

					<input type="text"
						className='text-black rounded-md pl-2 bg-white p-3  outline-none mx-2'
						value={newArt}
						onChange={(e) => setNewArt(e.target.value)}

					/>

					<input type="number"
						className='text-black rounded-md pl-2 bg-white p-3   outline-none mx-2'
						value={newPieces}
						onChange={(e) => setNewPieces(e.target.value)}
					/>


				</div>

				:
				<h1
					className='m-2'
				>
					{newArt} : {newPieces}

				</h1>
			}



			{isPalletEditing &&

				<div>


					{isPositionEditing ?

						<div>




							<button
								className='   bg-green-600 text-white p-1 rounded-lg mx-2 '
								onClick={() => handlerPositionSave(id)}
							>Save</button>

							<button
								className='   bg-red-600 text-white p-1 rounded-lg mx-2 '
								onClick={() => handlerPositionDelete(id)}
							>Delete
							</button>

						</div>


						:



						<div>

							<button
								className='text-white  bg-blue-400 rounded-md p-1 m-1'
								onClick={() => handlerPositionEdit(id)}
							>Edit</button>

						</div>
					}

				</div>


			}

		</div>
	);
};

export default PalletPosition;