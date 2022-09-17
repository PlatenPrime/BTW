import React from 'react';

const PalletPosition = ({ art, pieces, deletePosition, id }) => {



	return (
		<div className='w-3/4 mx-auto flex flex-row justify-between text-white text-lg'>
			{art} : {pieces}  <button onClick={() => deletePosition(id)}>Удалить</button>
		</div>
	);
};

export default PalletPosition;