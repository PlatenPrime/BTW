import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const PalletItem = ({ pallet, isEdit,
	inputPosition, setInputPosition,
	positions, setPositions,
	art, setArt,
	pieces, setPieces



}) => {




	if (!pallet) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}


	const addPosition = () => {

		const position = {
			id: positions.length === 0 ? 1 : positions[positions.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPositions(art !== "" ? [...positions, position] : positions);
		setArt("");
		setPieces("");

	}



	const deletePosition = (id) => {
		setPositions(positions.filter((position) => position.id !== id));

	};


	const updatePosition = (id) => {
		positions.map((position) => {
			if (position.id === id) {
				return { ...position, art, pieces }
			} else {
				return position;
			}
		})

	}




	return (
		<div >



			{pallet.positions.length &&

				<div className='flex flex-col justify-center m-5 bg rounded-3xl' >


					{
						pallet.positions.map((position) => {
							return (
								<div>


									{inputPosition ?
										<div className='flex justify-between text-white'>
											Input div

											<button
												onClick={() => { setInputPosition(false) }}
											>
												Сохранить
											</button>
										</div>

										:


										<div
											className='w-3/4 border mx-auto flex flex-row justify-between text-white text-xl p-3 '
											key={position.id}
										>

											{position.art} : {position.pieces}

											{isEdit &&

												<button
													className='text-sm text-white bg-blue-600 rounded-md my-1 p-1'
													onClick={() => { setInputPosition(true) }}
												>
													Изменить
												</button>}

										</div>

									}
								</div>

							)
						})
					}


				</div>

			}



		</div >
	);
};

export default PalletItem;