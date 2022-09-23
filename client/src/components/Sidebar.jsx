import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { checkIsAuth } from '../redux/features/auth/authSlice';

const Sidebar = () => {


	const isAuth = useSelector(checkIsAuth);

	const activeStyles = {
		color: "white",
	}




	return (
		<div>
			{isAuth &&
				(<ul className='flex gap-8'>
					<li><NavLink to={"/"} className='text-lg text-black hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined} >Главная</NavLink></li>
					<li><NavLink to={"pallets"} className='text-lg text-black hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined}>Паллеты</NavLink></li>
					<li><NavLink to={"new"} className='text-lg text-black hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined}>Создать паллету</NavLink></li>
				</ul>)
			}
		</div>
	);
};

export default Sidebar;