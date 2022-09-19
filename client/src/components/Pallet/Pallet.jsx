import React, { useState } from 'react';


const Pallet = ({ pallet }) => {

	if (!pallet) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}

	return (
		<div className='flex flex-col justify-center mt-10 ' >

			{pallet.title}

			{pallet.positions.length > 0 &&

				<div className='border rounded-md'>

					{
						pallet.positions.map((position) => {
							return (
								<div className='w-3/4 mx-auto flex flex-row justify-between text-white text-lg p-3'>
									{position.art} : {position.pieces}
								</div>
							)
						})
					}


				</div>

			}



		</div>
	);
};

export default Pallet;