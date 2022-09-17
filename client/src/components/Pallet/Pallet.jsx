import React, { useState } from 'react';
import PalletInput from './PalletInput';
import PalletTitle from './PalletTitle';
import PalletPosition from './PalletPosition';

const Pallet = () => {

	const [positions, setPositions] = useState([]);

	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState(0);



	const addPosition = () => {

		const position = {
			id: positions.length === 0 ? 1 : positions[positions.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPositions(art !== "" ? [...positions, position] : positions);
		setArt("");
		setPieces(0);

	}



	const deletePosition = (id) => {
		setPositions(positions.filter((position) => position.id !== id));

	};




	return (
		<div className='flex flex-col justify-center mt-10' >

			<PalletTitle />


			{positions.length > 0 &&

				<div className='border'>

					{
						positions.map((position) => {
							return (
								<PalletPosition
									id={position.id}
									key={position.id}
									art={position.art}
									pieces={position.pieces}
									deletePosition={deletePosition}

								/>
							)
						})
					}


				</div>


			}


			<PalletInput

				art={art}
				setArt={setArt}
				pieces={pieces}
				setPieces={setPieces}

				addPosition={addPosition} />



			<button className='bg-green-700 text-white p-3 mx-auto w-fit rounded-lg mt-4' >СОХРАНИТЬ</button>


		</div>
	);
};

export default Pallet;