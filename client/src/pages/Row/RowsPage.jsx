import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RowBage from "../../components/Row/RowBage";
import { getAllPallets } from '../../redux/features/pallet/palletSlice';

import { } from "../../redux/features/row/rowSlice";






const RowsPage = () => {

	const dispatch = useDispatch();
	const { rows } = useSelector((state) => state.row);


	useEffect(() => {
		dispatch(getAllPallets())
	}, [dispatch])







	return (
		<div className='max-w-[900px] mx-auto py-10 w-full'  >

			<Link to="new"

			><button className='text-xl text-white p-2 rounded-lg  block mx-auto w-full bg-green-600' >Создать новый ряд</button></Link>

			{!rows.length ?

				<div className='text-xl text-center text-white py-10'>
					В базе данных нет ни одного ряда.
				</div>
				:

				<div className='mx-auto  w-3/4'>
					<h2 className='text-xl text-white my-6'>В базе данных на текущий момент есть такие паллеты:</h2>
					{rows?.map((pallet, idx) => (
						<RowBage key={idx} pallet={pallet} />
					))}
				</div>


			}

		</div >
	);
};

export default RowsPage;