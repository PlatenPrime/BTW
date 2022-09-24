import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../utils/axios';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';


import { removePallet } from '../redux/features/pallet/palletSlice';









const PalletPage = () => {

	const [pallet, setPallet] = useState(null)

	const navigate = useNavigate()
	const params = useParams()
	const dispatch = useDispatch()



	const removePalletHandler = () => {
		try {
			dispatch(removePallet(params.id))
			toast('Паллета был удалена')
			navigate('/pallets')
		} catch (error) {
			console.log(error)
		}
	}





	return (
		<div>
			<button className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'>
				<Link className='flex' to={'/'}>
					Назад
				</Link>
			</button>






		</div>
	);
};

export default PalletPage;