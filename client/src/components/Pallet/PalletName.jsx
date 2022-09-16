import React from 'react';
import { useState } from 'react';

const PalletName = () => {

	const [name, setName] = useState("");
	const [isEditingName, setIsEditingName] = useState(true);


	const handlerName = () => {
		setIsEditingName(!isEditingName);
	}




	return (
		<div className='my-3'>


			{!isEditingName && <div className='flex flex-row justify-between w-1/2 mx-auto px-2'>
				<h2>{name !== "" ? name : "___________"}</h2>
				{name !== "" ? <button onClick={handlerName} >Редактировать имя</button> : <button onClick={handlerName} >Ввести имя</button>}
			</div>
			}

			{isEditingName && <div className='flex flex-row justify-between w-1/2 mx-auto px-2'>
				<input
					className='rounded-lg'
					type="text"
					value={name}
					placeholder='Название...'
					onChange={e => setName(e.target.value)} />

				<button onClick={handlerName}>Сохранить</button>
			</div>
			}

		</div>
	);
};

export default PalletName;