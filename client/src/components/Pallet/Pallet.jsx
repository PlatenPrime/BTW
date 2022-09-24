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
		<div className='flex flex-col justify-center my-5 ' >

			<div className='p-2 flex justify-between bg-blue-400 text-white'>

				<span className='flex items-center text-lg'>Паллета {pallet.title}</span>

				<span className='mx-4'>
					<button className='my-1 mx-1 p-1 rounded-md bg-yellow-600'>Редактировать</button>

				</span>


			</div>

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