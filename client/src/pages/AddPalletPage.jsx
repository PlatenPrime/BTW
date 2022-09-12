import React, { useState } from 'react';

const AddPalletPage = () => {


	const [box, setBox] = useState("");
	const [balls, setBalls] = useState(0);
	const [pallet, setPallet] = useState([{}])


	const handlePush = () => {
		setPallet([...pallet, { box, balls }]);
		setBox("");
		setBalls(0);

	}

	console.log(pallet);

	return (
		<form className='w-1/3 mx-auto py-10'


			onSubmit={e => e.preventDefault()}
		>
			<label className='text-xs text-white opacity-70'>
				Артикул:
				<input
					type='text'
					value={box}
					onChange={(e) => setBox(e.target.value)}
					placeholder='Артикул'
					className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
				/>
			</label>

			<label className='text-xs text-white opacity-70'>
				Количество:
				<input
					type='number'
					value={balls}
					onChange={(e) => setBalls(e.target.value)}
					placeholder='Количество'
					className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
				/>
			</label>



			<button onClick={handlePush}>ДОБАВИТЬ АРТИКУЛ</button>
			<button>CОЗДАТЬ</button>

		</form>
	);
};

export default AddPalletPage;