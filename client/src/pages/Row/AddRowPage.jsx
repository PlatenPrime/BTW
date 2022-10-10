import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { createRow } from "../../redux/features/row/rowSlice";
import { checkIsAuth } from '../../redux/features/auth/authSlice';


import RowItem from '../../components/Row/RowItem';




const AddRowPage = () => {

	// State


	const [isRowEditing, setIsRowEditing] = useState(true)

	const [title, setTitle] = useState('');
	const [pallets, setPallets] = useState('');




	// Hooking

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { status } = useSelector((state) => state.row)
	const isAuth = useSelector(checkIsAuth)


	useEffect(() => {
		if (status) {
			toast(status)
		}
		if (!isAuth) navigate('/login')
	}, [status, isAuth, navigate])




	// Handlers


	const handlerSubmit = () => {
		try {
			const data = {
				title, pallets
			}
			dispatch(createRow(data))
			navigate('/rows')

		} catch (error) {
			console.log(error)
		}
	}

	const handlerClearForm = () => {

		setTitle('')
	}



	// Render




	return (

		<div className='border p-5'>

			<h1 className='my-5 text-white'>Введи название ряда</h1>

			<div className='mx-auto w-3/4  shadow-lg shadow-slate-400 rounded-b-md' >



				<RowItem
					isRowEditing={isRowEditing}
					title={title}
					setTitle={setTitle}



				/>


				<div className='flex my-3'>

					<button
						className='bg-green-500 p-3 rounded-lg mx-auto block text-white'
						onClick={handlerSubmit}
					>Сохранить ряд в БД</button>


					<button
						className='bg-red-300 p-3 rounded-lg mx-auto block text-white'
						onClick={handlerClearForm}
					>Очистить форму</button>

				</div>



			</div>



		</div>

	);
};

export default AddRowPage;