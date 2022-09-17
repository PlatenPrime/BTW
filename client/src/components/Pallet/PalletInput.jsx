import React, { useState } from 'react';

const PalletInput = ({ addPosition, art, setArt, pieces, setPieces }) => {

	const [add, setAdd] = useState(false);


	const toggleAdd = () => {
		setAdd(!add);
	}


	return (


		<>

			{add ?



				<div className='border mx-auto mt-3 py-1 flex flex-row px-2'>




					<input
						type='text'
						value={art}
						onChange={(e) => setArt(e.target.value)}
						placeholder='Артикул...'
						className='mt-1 mx-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
					/>



					<input
						type='number'
						value={pieces}
						onChange={(e) => setPieces(e.target.value)}
						placeholder='Количество...'
						className='mt-1 mx-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
					/>




					<button
						className='px-2 mx-1 bg-blue-400 text-white rounded-md'
						onClick={addPosition}
					>Да</button>

					<button
						className='px-2 mx-1 bg-red-400 text-white rounded-md'
						onClick={toggleAdd}
					>Нет</button>

				</div>
				:
				<button
					className='bg-yellow-400 text-white p-2 mx-auto rounded-full'
					onClick={toggleAdd}
				>Добавить артикул</button>
			}
		</>
	);
};

export default PalletInput;