import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pallet from '../components/Pallet/Pallet';
import { getAllPallets } from '../redux/features/pallet/palletSlice';

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

	console.log(pallets);

	return (

		<div lassName='max-w-[900px] mx-auto py-10'  >
			<h2 className='text-xl my-6'>В базе данных на текущий момент есть такие паллеты:</h2>

			<div className='w-1/2 mx-auto'>
				{pallets?.map((pallet, idx) => (
					<Pallet key={idx} pallet={pallet} />
				))}
			</div>


		</div>
	);
};

export default PalletsPage;