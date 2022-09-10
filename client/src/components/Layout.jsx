import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<>
			<div className='container mx-auto'>
				<Navbar />

				{children}

			</div>

		</>
	);
};

export default Layout;