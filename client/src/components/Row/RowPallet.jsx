import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";







const RowPallet = ({ title, id }) => {





	return (

		<div>

			<Link to={`/pallets/${id}`}>{title}</Link>


		</div>
	);
};

export default RowPallet;


