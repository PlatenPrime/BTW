import React from 'react';
import { useState } from 'react';

const PalletName = () => {

	const [title, setTitle] = useState("");
	const [isEditingTitle, setIsEditingTitle] = useState(true);


	const handlerTitle = () => {
		setIsEditingTitle(!isEditingTitle);
	}




	return (
		<div className='my-3'>


			{!isEditingTitle && <div className='flex flex-row justify-between w-1/2 mx-auto px-2'>
				<h2>{title !== "" ? title : "___________"}</h2>
				{title !== "" ? <button onClick={handlerTitle} >Редактировать имя</button> : <button onClick={handlerTitle} >Ввести имя</button>}
			</div>
			}

			{isEditingTitle && <div className='flex flex-row justify-between w-1/2 mx-auto px-2'>
				<input
					className='rounded-lg'
					type="text"
					value={title}
					placeholder='Название...'
					onChange={e => setTitle(e.target.value)} />

				<button onClick={handlerTitle}>Сохранить</button>
			</div>
			}

		</div>
	);
};

export default PalletName;