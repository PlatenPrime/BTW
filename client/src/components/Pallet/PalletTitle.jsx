import React from 'react';

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


	return (
		<div>

			{isEditingTitle ?

				<div>
					<h2>Input</h2>
					<button>Save</button>
				</div>

				:

				<div>
					<h2>Label</h2>
					<button>Edit</button>
				</div>

			}





		</div>
	);
};

export default PalletTitle;