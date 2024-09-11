import './styles/Header.css';

const Header = () => {
	return (
		<header className="pokedex__header">
			<div className="pokedex__header-circle-container">
				<div className="pokedex__circle-large">
					<div className="pokedex__circle-small">
						<img
							className="pokedex__circle-small-logo"
							src="/public/logo-carga.png"
							alt="logo"
						/>
					</div>
				</div>
			</div>
			<div className="header__img-container ">
				<img className="header__img" src="/public/image 11.png" alt="pokedex" />
			</div>

			<div className="pokedex__header-box"></div>
		</header>
	);
};

export default Header;
