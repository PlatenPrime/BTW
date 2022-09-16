import React, { useState } from 'react';
import PalletInput from './PalletInput';
import PalletName from './PalletName';
import PalletPosition from './PalletPosition';

const Pallet = () => {

	const [pallet, setPallet] = useState([]);

	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState(0);



	const addPosition = () => {

		const position = {
			id: pallet.length === 0 ? 1 : pallet[pallet.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPallet(art !== "" ? [...pallet, position] : pallet);
		setArt("");
		setPieces(0);

	}



	const deletePosition = (id) => {
		setPallet(pallet.filter((position) => position.id !== id));

	};




	return (
		<div className='flex flex-col justify-center'>

			<PalletName />


			{pallet.length > 0 &&

				<div className='border'>

					{
						pallet.map((position) => {
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