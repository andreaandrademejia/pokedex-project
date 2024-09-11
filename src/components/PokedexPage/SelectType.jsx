import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/SelecType.css';

const SelectType = ({ setTypeSelected, setSearchedName, setItemOffset }) => {
	const [types, getTypes] = useFetch();
	useEffect(() => {
		const url = 'https://pokeapi.co/api/v2/type';
		getTypes(url);
	}, []);

	const handleChange = (e) => {
		setTypeSelected(e.target.value);
		setSearchedName('');
		setItemOffset(0);
	};

	return (
		<select className="selectype" onChange={handleChange}>
			<option value="allPokemons">All Pokemons</option>
			{types?.results.map((typeInfo) => (
				<option key={typeInfo.url} value={typeInfo.url}>
					{typeInfo.name}
				</option>
			))}
		</select>
	);
};

export default SelectType;
