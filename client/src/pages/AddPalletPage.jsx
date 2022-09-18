import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'




import PalletInput from '../components/Pallet/PalletInput';
import PalletPositions from '../components/Pallet/PalletPositions';
import PalletTitle from '../components/Pallet/PalletTitle';

import { createPallet } from '../redux/features/pallet/palletSlice';



const AddPalletPage = () => {

	const [title, setTitle] = useState('');
	const [positions, setPositions] = useState([]);
	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState("");

	const dispatch = useDispatch()
	const navigate = useNavigate()


	const submitHandler = () => {
		try {
			const data = {
				title, positions
			}
			dispatch(createPallet(data))
			navigate('/')
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	const clearFormHandler = () => {
		setPositions([])
		setTitle('')
	}



	const addPosition = () => {

		const position = {
			id: positions.length === 0 ? 1 : positions[positions.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPositions(art !== "" ? [...positions, position] : positions);
		setArt("");
		setPieces("");

	}



	const deletePosition = (id) => {
		setPositions(positions.filter((position) => position.id !== id));

	};











	return (
		<div >

			<h1 className='my-5'>Введи название паллеты  и позиции на ней </h1>

			<div className='border border-black p-10 rounded-lg my-10' >

				<PalletTitle
					title={title}
					setTitle={setTitle} />

				<PalletPositions
					positions={positions}
					deletePosition={deletePosition} />

				<PalletInput
					addPosition={addPosition}
					art={art}
					setArt={setArt}
					pieces={pieces}
					setPieces={setPieces}
				/>
			</div>

			<div className='flex'>

				<button
					className='bg-green-500 p-5 rounded-lg mx-auto block text-white'
					onClick={submitHandler}
				>Сохранить паллету в базу данных</button>


				<button
					className='bg-red-300 p-5 rounded-lg mx-auto block text-white'
					onClick={clearFormHandler}
				>Очистить форму</button>

			</div>

		</div>



	);
};

export default AddPalletPage;