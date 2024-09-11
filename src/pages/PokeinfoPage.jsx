import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Header from '../shared/Header';
import './styles/PokeinfoPage.css';

const PokeinfoPage = () => {
	const { name } = useParams();
	const [pokemon, getPokemon] = useFetch();

	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
		getPokemon(url);
	}, [name]);

	return (
		<article className="pokeinfo flex-container">
			<Header />
			<div className={`pokeinfo__card border__${pokemon?.types[0].type.name}`}>
				<header className={`pokeinfo__card-header bg__${pokemon?.types[0].type.name}`}>
					<img className="pokeinfo__card-img" src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
				</header>
				<section className="pokeinfo__card-info-container">
					<div className={`pokeinfo__card-number-container text__${pokemon?.types[0].type.name}`}>
						<h2 className="pokeinfo__card-number">#{pokemon?.id}</h2>
					</div>
					<div className="pokeball__styles">
						<div className="pokeball">
							<div className="pokeball__top"></div>
							<div className="pokeball__bottom"></div>
							<div className="pokeball__center"></div>
						</div>
						<div className={`pokeinfo__card-name-container text__${pokemon?.types[0].type.name}`}>
							<h2 className="pokeinfo__card-name">{pokemon?.name}</h2>
						</div>
						<div className="pokeball">
							<div className="pokeball__top"></div>
							<div className="pokeball__bottom"></div>
							<div className="pokeball__center"></div>
						</div>
					</div>

					<div className="pokeinfo__card-measures-container">
						<div className="pokeinfo__card-measures ">
							<h4 className="pokeinfo__card-measures-label">Weight</h4>
							<p className="pokeinfo__card-measures-value">{pokemon?.weight / 10} kg</p>
						</div>
						<div className="pokeinfo__card-measures ">
							<h4 className="pokeinfo__card-measures-label">Height</h4>
							<p className="pokeinfo__card-measures-value">{pokemon?.height / 10} m</p>
						</div>
					</div>
					<div className="types__abilities-container">
						<div className="pokeinfo__card-types">
							<h3 className="pokeinfo__card-types-title">Type</h3>
							<div className="pokeinfo__card-types-abilities-list">
								{pokemon?.types.map((typeInfo) => (
									<div className={`pokeinfo__card-types-abilities-item types__text-border bg__${typeInfo.type.name} `} key={typeInfo.type.url}>
										{typeInfo.type.name}
									</div>
								))}
							</div>
						</div>
						<div className="pokeinfo__card-abilities">
							<h3 className="pokeinfo__card-abilities-title">Abilities</h3>
							<div className="pokeinfo__card-types-abilities-list">
								{pokemon?.abilities.map((abilityInfo) => (
									<div className="pokeinfo__card-types-abilities-item abilities__border" key={abilityInfo.ability.url}>
										{abilityInfo.ability.name}
									</div>
								))}
							</div>
						</div>
					</div>
					<h2 className="pokeinfo__card-stats-title">Base Stats</h2>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">HP:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[0].base_stat}/255</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[0].base_stat} max="255"></progress>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">Attack:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[1].base_stat}/190</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[1].base_stat} max="190"></progress>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">Defense:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[2].base_stat}/250</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[2].base_stat} max="250"></progress>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">Sp-Attack:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[3].base_stat}/194</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[3].base_stat} max="194"></progress>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">Sp-Defense:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[4].base_stat}/250</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[4].base_stat} max="250"></progress>
					<div className="pokeinfo__card-stats-container">
						<span className="pokeinfo__card-stats-label">Speed:</span>
						<span className="pokeinfo__card-stats-value">{pokemon?.stats[5].base_stat}/180</span>
					</div>
					<progress className="pokeinfo__card-stats-progress" value={pokemon?.stats[5].base_stat} max="180"></progress>
				</section>
			</div>
			<div className={`pokeinfo__moves border__${pokemon?.types[0].type.name}`}>
				<h2 className="pokeinfo__moves-title">Some Moves</h2>
				<div className="pokeball">
					<div className="pokeball__top"></div>
					<div className="pokeball__bottom"></div>
					<div className="pokeball__center"></div>
				</div>
				<div className="pokeinfo__moves-list">
					{pokemon?.moves
						.map((moveInfo) => (
							<div className="pokeinfo__moves-item" key={moveInfo.move.url}>
								{moveInfo.move.name}
							</div>
						))
						.slice(0, 23)}
				</div>
			</div>
		</article>
	);
};

export default PokeinfoPage;
