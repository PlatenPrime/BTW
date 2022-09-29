import React, { useState } from 'react';

const PalletTitle = ({ title, setTitle }) => {

	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [newTitle, setNewTitle] = useState(title)


	const handlerEdit = () => {
		setIsEditingTitle(true);
	}


	const handlerSave = () => {
		setIsEditingTitle(false);
		setTitle(newTitle)
	}

	console.log(newTitle);

	return (
		<div className='text-3xl bg-teal-500 w-full my-4 flex justify-center'>

			{isEditingTitle ?

				<div>

					<input
						className='rounded-md pl-2 bg-gray-600 bg-opacity-40 outline-none'
						type="text"
						value={newTitle}
						placeholder='Название...'
						onChange={e => setNewTitle(e.target.value)} />


					<button
						className='text-white  bg-blue-400 rounded-md p-2 mx-2'
						onClick={handlerSave}

					>Save</button>

				</div>


				:


				<div>


					<h2>{newTitle}</h2>


					{title ?

						<button
							className='text-white  bg-blue-400 rounded-md p-2 mx-2'
							onClick={handlerEdit}

						>Edit</button>

						:

						<button
							className='text-white  bg-blue-400 rounded-md p-2 mx-2'
							onClick={handlerEdit}

						>Add</button>

					}






				</div>

			}





		</div>
	);
};

export default PalletTitle;