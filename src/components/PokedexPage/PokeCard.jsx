import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/PokeCard.css';
import Loader from '../../shared/Loader';

const PokeCard = ({ poke }) => {
	const [pokemon, getPokemon] = useFetch();
	const navigate = useNavigate();
	useEffect(() => {
		getPokemon(poke.url);
	}, []);
	const handleNavigate = () => {
		navigate(`/pokemon/${pokemon?.name}`);
	};

	return (
		<div>
			{pokemon ? (
				<article className={`pokecard border__${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
					<header className={`pokecard__header bg__${pokemon?.types[0].type.name}`}>
						<img className="pokecard__img" src={pokemon?.sprites.other['home'].front_default} alt={pokemon?.name} />
					</header>
					<section className="pokecard__body">
						<h3 className={`pokecard__name text__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
						<ul className="pokecard__types flex-container">
							{pokemon?.types.map((typeInfo) => (
								<li className="pokecard__types-item flex-container" key={typeInfo.type.url}>
									{typeInfo.type.name}
								</li>
							))}
						</ul>
						<hr className="pokecard__hr" />
						<ul className="pokecard__stats grid-container">
							{pokemon?.stats.map((statInfo) => (
								<li className="pokecard__stats-item grid-container" key={statInfo.stat.url}>
									<span className="pokecard__stats-label">{statInfo.stat.name}</span>
									<span className="pokecard__stats-value">{statInfo.base_stat}</span>
								</li>
							))}
						</ul>
					</section>
				</article>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default PokeCard;
