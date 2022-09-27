import React from 'react';
import PalletPosition from './PalletPosition';

const PalletPositions = ({ positions, deletePosition }) => {




	return (
		<div>

			{positions.length > 0 &&

				<div className='border rounded-md'>

					{
						positions.map((position) => {
							return (
								<PalletPosition
									id={position.id}
									key={position.id}
									art={position.art}
									pieces={position.pieces}
									deletePosition={deletePosition}

								/>
							)
						})
					}


				</div>

			}


		</div>
	);
};

export default PalletPositions;