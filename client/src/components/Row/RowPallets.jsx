import React, { useEffect, useState } from 'react';
import RowPallet from "./RowPallet";




const RowPallets = ({ pallets,  }) => {


	// States


	const [newPallets, setNewPallets] = useState(null);


	useEffect(() => {
		setNewPallets(pallets)
	}, [pallets])







	return (


		<div>

			{newPallets &&

				<div className='border rounded-md'>

					{
						newPallets.map((pallet) => {
							return (

								<RowPallet

									title={pallet.title}

									id={pallet.id}
									key={pallet.id}


								/>


							)
						})
					}


				</div>

			}


		</div>


	);
};

export default RowPallets;