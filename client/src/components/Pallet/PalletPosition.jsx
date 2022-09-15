import React from 'react';

const PalletPosition = ({ art, pieces }) => {
	return (
		<div className='w-1/3 mx-auto flex flex-row justify-between text-white text-sm'>
			{art} : {pieces}  <button>Удалить</button>
		</div>
	);
};

export default PalletPosition;