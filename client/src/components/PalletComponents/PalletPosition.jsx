import React from 'react';

const PalletPosition = ({ art, pieces, deletePosition, id }) => {



	return (
		<div className='w-3/4 mx-auto flex flex-row justify-between text-white text-lg p-3 '>
			{art} : {pieces}  <button className='bg-red-600 p-1 rounded-md' onClick={() => deletePosition(id)}>Удалить</button>
		</div>
	);
};

export default PalletPosition;