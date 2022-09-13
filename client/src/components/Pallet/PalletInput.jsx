import React from 'react';

const PalletInput = () => {


	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState(0);
	const [pallet, setPallet] = useState([])


	const handlePush = () => {
		setPallet([...pallet, { art, pieces }]);
		setArt("");
		setPieces(0);

	}









	return (

		<form className='w-1/3 mx-auto py-10'


			onSubmit={e => e.preventDefault()}
		>
			<label className='text-xs text-white opacity-70'>
				Артикул:
				<input
					type='text'
					value={art}
					onChange={(e) => setArt(e.target.value)}
					placeholder='Артикул'
					className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
				/>
			</label>

			<label className='text-xs text-white opacity-70'>
				Количество:
				<input
					type='number'
					value={pieces}
					onChange={(e) => setPieces(e.target.value)}
					placeholder='Количество'
					className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
				/>
			</label>



			<button onClick={handlePush}>ДОБАВИТЬ АРТИКУЛ</button>





		</form>
	);
};

export default PalletInput;