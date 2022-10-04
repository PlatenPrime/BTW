import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PalletBage from '../../components/Pallet/PalletBage';
import { getAllPallets } from '../../redux/features/pallet/palletSlice';

const PalletsPage = () => {

	const dispatch = useDispatch();
	const { pallets } = useSelector((state) => state.pallet);



	useEffect(() => {
		dispatch(getAllPallets())
	}, [dispatch])



	if (!pallets.length) {
		return (
			<div className='text-xl text-center text-white py-10'>
				В базе данных нет ни одной паллеты.
			</div>
		)
	}



	return (

		<div className='max-w-[900px] mx-auto py-10 w-full'  >

			<Link to="new"

			><button className='text-xl text-white p-2 rounded-lg  block mx-auto w-full bg-green-600' >Создать новую паллету</button></Link>

			<h2 className='text-xl my-6'>В базе данных на текущий момент есть такие паллеты:</h2>

			<div className='mx-auto  w-3/4'>
				{pallets?.map((pallet, idx) => (
					<PalletBage key={idx} pallet={pallet} />
				))}
			</div>


		</div >
	);
};

export default PalletsPage;