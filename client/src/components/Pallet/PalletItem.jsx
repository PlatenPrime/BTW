import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const PalletItem = ({ pallet, isEdit }) => {




	if (!pallet) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}

	return (
		<div >



			{pallet.positions.length &&

				<div className='flex flex-col justify-center m-5 bg rounded-3xl' >


					{
						pallet.positions.map((position) => {
							return (
								<div
									className='w-3/4 border mx-auto flex flex-row justify-between text-white text-xl p-3 '
									key={position.id}
									
								>
									{position.art} : {position.pieces}

									{isEdit &&


										<button
											className='text-sm text-white bg-blue-600 rounded-md my-1 p-1'>
											Изменить
										</button>}

								</div>
							)
						})
					}


				</div>

			}



		</div>
	);
};

export default PalletItem;