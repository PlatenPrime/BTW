import React, { useState } from 'react';

const PalletInput = ({ addPosition, art, setArt, pieces, setPieces }) => {

	const [add, setAdd] = useState(false);


	const toggleAdd = () => {
		setAdd(!add);
	}


	return (


		<div className='flex '>

			{add ?



				<div className='border mx-auto my-3 py-3 flex flex-row px-2'>




					<input
						type='text'
						value={art}
						onChange={(e) => setArt(e.target.value)}
						placeholder='Артикул...'
						className='my-1 mx-1 text-black text-lg w-full rounded-lg bg-white bg-opacity-40 border py-3 px-2 text-xs outline-none placeholder:text-gray-700 placeholder:text-lg'
					/>



					<input
						type='number'
						value={pieces}
						onChange={(e) => setPieces(e.target.value)}
						placeholder='Количество...'
						className='my-1 mx-1 text-black text-lg w-full rounded-lg bg-white bg-opacity-40 border py-3 px-2 text-xs outline-none placeholder:text-gray-700 placeholder:text-lg'
					/>




					<button
						className='px-2 my-1 mx-1 bg-blue-400 text-white rounded-md'
						onClick={addPosition}
					>Да</button>

					<button
						className='px-2 my-1 mx-1 bg-red-400 text-white rounded-md'
						onClick={toggleAdd}
					>Нет</button>

				</div>
				:
				<button
					className='bg-yellow-400 text-white p-2 my-4  mx-auto rounded-lg'
					onClick={toggleAdd}
				>Добавить артикул</button>
			}
		</div>
	);
};

export default PalletInput;