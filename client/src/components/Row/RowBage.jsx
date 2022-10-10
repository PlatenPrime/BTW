import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const RowBage = ({ row }) => {



	if (!row) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}



	return (
		<div className='flex flex-col justify-center my-5 ' >



			<Link to={`${row._id}`} className='my-1 mx-1 p-1 rounded-md' >

				<div className='p-2 flex justify-between bg-blue-400 text-white shadow-lg shadow-slate-400 rounded-md'>

					<span className='flex items-center text-lg'>Ряд {row.title}</span>
				</div>

			</Link>




		</div>
	);
};

export default RowBage;