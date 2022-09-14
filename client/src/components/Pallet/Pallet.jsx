import React, { useState } from 'react';
import PalletInput from './PalletInput';
import PalletPosition from './PalletPosition';

const Pallet = () => {

	const [pallet, setPallet] = useState([]);




	return (
		<div>


			{pallet.length > 0 &&

				<ul>

					{
						pallet.map((position) => {
							return (
								<PalletPosition art={position.art} pieces={position.pieces} />
							)
						})
					}


				</ul>


			}


			<PalletInput pallet={pallet} setPallet={setPallet} />






		</div>
	);
};

export default Pallet;