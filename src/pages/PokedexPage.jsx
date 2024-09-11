import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/PokedexPage/PokeCard';
import SelectType from '../components/PokedexPage/SelectType';
import './styles/PokedexPage.css';
import Header from '../shared/Header';

import ReactPaginate from 'react-paginate';

const PokedexPage = () => {
	const trainer = useSelector((slices) => slices.trainer);
	const [pokemons, getPokemons, getTypePokemons] = useFetch();
	const [searchedName, setSearchedName] = useState('');
	const [typeSelected, setTypeSelected] = useState('allPokemons');
	const [itemOffset, setItemOffset] = useState(1);

	useEffect(() => {
		if (typeSelected === 'allPokemons') {
			const url = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0';
			getPokemons(url);
		} else {
			getTypePokemons(typeSelected);
		}
	}, [typeSelected]);

	const inputName = useRef();

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchedName(inputName.current.value.trim().toLowerCase());
		e.target.reset();
		setTypeSelected('');
		setItemOffset(0);
	};
	const callbackFilter = (poke) => {
		const filterName = poke.name.includes(searchedName);
		return filterName;
	};

	const itemsPerPage = 20;
	const pageCount = Math.ceil(pokemons?.results.length / itemsPerPage);
	const endOffset = itemOffset + itemsPerPage;

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % pokemons?.results.length;

		setItemOffset(newOffset);
		setSearchedName('');
	};

	return (
		<div>
			<Header />
			<section className="pokedexpage ">
				<div className="pokedex__welcome">
					<span className="pokedex__welcome-red">Welcome {trainer}</span>, <span>here you will find your favorite pokemons</span>
				</div>
				<div className="pokedex__filters-container">
					<div className="pokedex__form-container">
						<form className="pokedex__form" onSubmit={handleSearch}>
							<input className="pokedex__form-input" placeholder="Search a Pokémon" type="text" ref={inputName} />
							<button className="pokedex__form-btn">Search</button>
						</form>
					</div>
					<div className="pokedex__select-container">
						<SelectType setTypeSelected={setTypeSelected} setSearchedName={setSearchedName} setItemOffset={setItemOffset} />
					</div>
				</div>

				<section className="pokemons__container flex-container">
					{pokemons && !pokemons.results.some(callbackFilter) ? (
						<h2 className="pokedex__error">There is no Pokemon that match the filter</h2>
					) : (
						pokemons?.results
							.filter(callbackFilter)
							.map((poke) => <PokeCard key={poke.url} poke={poke} />)
							.slice(itemOffset, endOffset)
					)}
				</section>
			</section>
			<>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pokemons ? pageCount : 20}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageLinkClassName="pagination__number page"
					previousLinkClassName="pagination__prev page"
					nextLinkClassName="pagination__next page"
					activeLinkClassName="active"
				/>
			</>
		</div>
	);
};

export default PokedexPage;
