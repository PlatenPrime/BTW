import React, { useState } from 'react';
import PalletInput from './PalletInput';
import PalletName from './PalletName';
import PalletPosition from './PalletPosition';

const Pallet = () => {

	const [pallet, setPallet] = useState([]);




	return (
		<div className='flex flex-col justify-center'>

			<PalletName />


			{pallet.length > 0 &&

				<div className='border'>

					{
						pallet.map((position) => {
							return (
								<PalletPosition art={position.art} pieces={position.pieces} />
							)
						})
					}


				</div>


			}


			<PalletInput pallet={pallet} setPallet={setPallet} />



			<button className='bg-green-700 text-white p-3 mx-auto w-fit rounded-lg mt-4' >СОХРАНИТЬ</button>


		</div>
	);
};

export default Pallet;