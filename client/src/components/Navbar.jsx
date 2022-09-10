import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

	const isAuth = false;



	const activeStyles = {
		color: "white",
	}


	return (
		<div className='flex py-4 justify-between items-center'>
			<span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>
				E
			</span>


			{isAuth &&
				(<ul className='flex gap-8'>
					<li><NavLink to={"/"} className='text-xs text-gray-400 hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined} >Главная</NavLink></li>
					<li><NavLink to={"pallets"} className='text-xs text-gray-400 hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined}>Паллеты</NavLink></li>
					<li><NavLink to={"new"} className='text-xs text-gray-400 hover:text-white' style={({ isActive }) => isActive ? activeStyles : undefined}>Создать паллет</NavLink></li>
				</ul>)
			}





			<div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-md px-4 py-2' >
				{isAuth ? <button>Выйти</button> : <Link to={"/login"}>Войти</Link>}
			</div>


		</div>
	);
};

export default Navbar;