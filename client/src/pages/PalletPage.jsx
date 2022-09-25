import React, { useCallback } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../utils/axios';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';


import { removePallet } from '../redux/features/pallet/palletSlice';
import PalletItem from '../components/Pallet/PalletItem';











const PalletPage = () => {

	const [pallet, setPallet] = useState("")
	const [isEdit, setIsEdit] = useState(false)

	const navigate = useNavigate()
	const params = useParams()
	const dispatch = useDispatch()


	const fetchPallet = useCallback(async () => {
		const { data } = await axios.get(`/pallets/${params.id}`)
		setPallet(data)
	}, [params.id])

	useEffect(() => {
		fetchPallet()
	}, [fetchPallet])

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
		setIsEdit(false);
	}







	return (
		<div className='mx-auto w-3/4  shadow-lg shadow-slate-400 rounded-b-md'>


			<div className='text-3xl bg-teal-500 w-full my-4 flex justify-center' >{pallet.title}</div>

			<PalletItem pallet={pallet} isEdit={isEdit} />

			<div className='flex justify-center  w-full  my-3'>



				{isEdit ?

					<button
						className='text-xl text-white p-2 rounded-lg  m-3   bg-blue-600'
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