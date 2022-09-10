import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import PalletsPage from "./pages/PalletsPage";
import PalletPage from "./pages/PalletPage";
import AddPalletPage from "./pages/AddPalletPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditPalletPage from "./pages/EditPalletPage";


function App() {
	return (
		<Layout>

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />

				<Route path="pallets" element={<PalletsPage />} />
				<Route path=":id" element={<PalletPage />} />
				<Route path=":id/edit" element={<EditPalletPage />} />
				<Route path="new" element={<AddPalletPage />} />

			</Routes>

		</Layout>

	);
}

export default App;
