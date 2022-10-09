import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { createRow } from "../../redux/features/row/rowSlice";
import { checkIsAuth } from '../../redux/features/auth/authSlice';










const AddRowPage = () => {
	return (
		<div>
			Add Row Page
		</div>
	);
};

export default AddRowPage;