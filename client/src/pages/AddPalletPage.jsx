import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';


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

	const { status } = useSelector((state) => state.pallet)
	const isAuth = useSelector(checkIsAuth)


	useEffect(() => {
		if (status) {
			toast(status)
		}
		if (!isAuth) navigate('/login')
	}, [status, isAuth, navigate])




	const submitHandler = () => {
		try {
			const data = {
				title, positions
			}
			dispatch(createPallet(data))
			navigate('/pallets')
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
		<div className='border p-5'>

			<h1 className='my-5'>Введи название паллеты  и позиции на ней </h1>

			<div className='w-1/2 mx-auto border border-black p-10 rounded-lg my-10' >

				<PalletTitle
					title={title}
					setTitle={setTitle} />

				<hr />

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
				<hr />

				<div className='flex my-3'>

					<button
						className='bg-green-500 p-3 rounded-lg mx-auto block text-white'
						onClick={submitHandler}
					>Сохранить паллету в базу данных</button>


					<button
						className='bg-red-300 p-3 rounded-lg mx-auto block text-white'
						onClick={clearFormHandler}
					>Очистить форму</button>

				</div>



			</div>



		</div>



	);
};

export default AddPalletPage;