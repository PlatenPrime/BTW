import React from 'react';

const PalletPosition = ({ art, pieces }) => {
	return (
		<div className='w-3/4 mx-auto flex flex-row justify-between text-white text-sm'>
			{art} : {pieces} <button>Редактировать</button> <button>Удалить</button>
		</div>
	);
};

export default PalletPosition;