import React, { useState } from 'react';
import PalletTitle from './PalletTitle';





const PalletItem = ({

	isPalletEditing,
	title,
	setTitle,
	positions,
	setPositions

}) => {


	const [art, setArt] = useState("");
	const [pieces, setPieces] = useState("");





	const addPosition = () => {

		const position = {
			id: positions.length === 0 ? 1 : positions[positions.length - 1].id + 1,
			art: art,
			pieces: pieces,
		};


		setPositions(art !== "" ? [...positions, position] : positions);
		setArt("");
		setPieces("");

	}



	const deletePosition = (id) => {
		setPositions(positions.filter((position) => position.id !== id));

	};


	const updatePosition = (id) => {
		positions.map((position) => {
			if (position.id === id) {
				return { ...position, art, pieces }
			} else {
				return position;
			}
		})

	}









	return (
		<div>

			<PalletTitle
				title={title}
				setTitle={setTitle}

			/>


			<h2>Positions</h2>






		</div>
	);
};

export default PalletItem;