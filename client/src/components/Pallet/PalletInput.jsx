import React, { useState } from 'react';

const PalletInput = ({ addPosition, art, setArt, pieces, setPieces }) => {







	return (

		<div className='border w-1/2 mx-auto py-10 flex flex-row px-2'


		>

			<input
				type='text'
				value={art}
				onChange={(e) => setArt(e.target.value)}
				placeholder='Артикул...'
				className='mt-1  text-black w-full rounded-lg bg-white border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
			/>



			<input
				type='number'
				value={pieces}
				onChange={(e) => setPieces(e.target.value)}
				placeholder='Количество...'
				className='mt-1 text-black w-full rounded-lg bg-white border border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
			/>




			<button className='px-2 text-white' onClick={addPosition}>Добавить</button>
			<button className='px-2 text-white' >Отменить</button>





		</div>
	);
};

export default PalletInput;