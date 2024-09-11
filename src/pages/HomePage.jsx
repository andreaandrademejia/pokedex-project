import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setTrainer(inputTrainer.current.value.trim()));
		navigate('/pokedex');
	};
	const inputTrainer = useRef();

	return (
		<div className="home flex-container">
			<div className="home__img-container ">
				<img src="/image 11.png" alt="pokedex" />
			</div>
			<h1 className="home__title">Hi Trainer!</h1>
			<p className="home__title-text">
				To start, please give me your trainer name!
			</p>
			<form className="home__form" onSubmit={handleSubmit}>
				<input
					className="home__form-input"
					ref={inputTrainer}
					type="text"
					placeholder="Write your trainer name..."
				/>
				<button className="home__form-btn">Catch them all</button>
			</form>
			<footer className="home__footer">
				<div className="home__footer-circle-container">
					<div className="home__circle-large">
						<div className="home__circle-small">
							<img
								className="home__circle-small-logo"
								src="/public/logo-carga.png"
								alt="Logo"
							/>
						</div>
					</div>
				</div>
				<div className="home__footer-box1"></div>
				<div className="home__footer-box2"></div>
			</footer>
		</div>
	);
};

export default HomePage;
