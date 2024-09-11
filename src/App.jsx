import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokeinfoPage from './pages/PokeinfoPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import DarkMode from './shared/DarkMode';

function App() {
	return (
		<div>
			<DarkMode />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/pokedex" element={<PokedexPage />} />
					<Route path="/pokemon/:name" element={<PokeinfoPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
