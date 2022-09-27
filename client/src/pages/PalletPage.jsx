import React, { useCallback } from 'react';


import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../utils/axios';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';


import { removePallet, updatePallet } from '../redux/features/pallet/palletSlice';
import PalletItem from '../components/PalletComponents/PalletItem';











const PalletPage = () => {



	const [pallet, setPallet] = useState("")
	const [isEdit, setIsEdit] = useState(false)

	const [title, setTitle] = useState("")
	const [positions, setPositions] = useState("")

	const [inputTitle, setInputTitle] = useState(false)
	const [inputPosition, setInputPosition] = useState(false)
	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState("");








	const { status } = useSelector((state) => state.pallet)
	const navigate = useNavigate()
	const params = useParams()
	const dispatch = useDispatch()





	const fetchPallet = useCallback(async () => {
		const { data } = await axios.get(`/pallets/${params.id}`)
		setPallet(data)
		setTitle(data.title)
		setPositions(data.positions)

	}, [params.id])

	useEffect(() => {
		fetchPallet()
	}, [fetchPallet])



	// Pallet REST

	const removeAttempt = () => {
		window.confirm("Удалить эту паллету?") && dispatch(removePallet(params.id))
			&& toast('Паллета был удалена')
			&& navigate('/pallets')
	}


	const removePalletHandler = () => {
		try {
			removeAttempt()

		} catch (error) {
			console.log(error)
		}
	}

	const handlerEdit = () => {
		setIsEdit(true);
	}

	const handlerSave = () => {
		submitSave();
		setIsEdit(false);

	}

	const submitSave = () => {
		try {
			const updatedPallet = {
				...pallet,
				title,
				positions
			}

			console.log(updatedPallet);
			dispatch(updatePallet(updatedPallet))
			if (status) {
				toast(status)
			}

		} catch (error) {
			console.log(error)
		}
	}





	return (
		<div className='mx-auto w-3/4  shadow-lg shadow-slate-400 rounded-b-md'>



			<div
				className='text-3xl bg-teal-500 w-full my-4 flex justify-center' >

				{inputTitle ?


					<div>

						<input
							type="text"
							placeholder='Введи имя...'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>


						{isEdit &&
							<button
								className='text-sm text-white bg-blue-600 rounded-md my-1 p-1'
								onClick={() => setInputTitle(false)}
							>
								Сохранить
							</button>}
					</div>
					:
					<div>
						{title}
						{isEdit &&
							<button
								className='text-sm text-white bg-blue-600 rounded-md my-1 p-1'
								onClick={() => setInputTitle(true)}
							>
								Изменить
							</button>}
					</div>
				}


			</div>



			<PalletItem
				pallet={pallet}
				isEdit={isEdit}
				inputPosition={inputPosition}
				setInputPosition={setInputPosition}
				art={art}
				setArt={setArt}
				pieces={pieces}
				setPieces={setPieces}


			/>


			<div className='flex justify-center  w-full  my-3'>



				{isEdit ?

					<button
						className='text-xl text-white p-2 rounded-lg  m-3   bg-green-600'
						onClick={handlerSave}

					>Сохранить</button>
					:

					<button
						className='text-xl text-white p-2 rounded-lg  m-3   bg-blue-600'
						onClick={handlerEdit}

					>Редактировать</button>}



				<button className='text-xl text-black p-2 rounded-lg  m-3   bg-white' >Очистить</button>



				<button
					className='text-xl text-white p-2 rounded-lg  m-3   bg-red-600'
					onClick={removePalletHandler}
				>Удалить</button>
			</div>


		</div>
	);
};

export default PalletPage;