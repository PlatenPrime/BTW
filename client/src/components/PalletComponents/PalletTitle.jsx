import React from 'react';
import { useState } from 'react';





const PalletName = ({ title, setTitle }) => {


	const [isEditingTitle, setIsEditingTitle] = useState(true);


	const handlerTitle = () => {
		setIsEditingTitle(!isEditingTitle);
	}




	return (
		<div className='my-3 h-20'>


			{!isEditingTitle && <div className='flex flex-row justify-center w-1/2 mx-auto px-2'>

				{title && <h2
					onClick={handlerTitle}

					className='align-left align-middle text-3xl' >{title !== "" ? title : ""}</h2>
				}

				{title !== ""
					?
					""
					:
					<button className='text-white  bg-blue-400 rounded-md p-2 mx-2' onClick={handlerTitle} >Ввести имя</button>}
			</div>
			}

			{isEditingTitle && <div className='flex flex-row justify-between w-1/2 mx-auto px-2'>

				<input
					className='rounded-md pl-2 bg-white bg-opacity-40 outline-none'
					type="text"
					value={title}
					placeholder='Название...'
					onChange={e => setTitle(e.target.value)} />

				<button className='text-white  bg-blue-400 rounded-md p-2 mx-2' onClick={handlerTitle}>Сохранить</button>

			</div>
			}

		</div>
	);
};

export default PalletName;