import { useState } from 'react';
import CardsList from './components/CardsList';
import './styles/App.css';


function App() {
	const [foods, setFoods] = useState([
		{
			id: 1, Name: "Нямушка", Taste: "с фуа-гра", Portions: 10, Weight: 0.5, Description: "Печень утки разварная с артишоками.", availability: false
		},
		{
			id: 2, Name: "Нямушка", Taste: "с рыбой", Portions: 40, Weight: 2, Description: "Головы щучьи с чесноком да свежайшая сёмгушка.", availability: true
		},
		{
			id: 3, Name: "Нямушка", Taste: "с курой", Portions: 50, Weight: 5, Description: "Филе из цыплят с трюфелями в бульоне.", availability: true
		},		
	]);


  return (
    <div className="App">
			<main className="main">
				<div className="container">
					<div className="wrapper">
						<section className="cat-food">
							<h2 className="cat-food__title">Ты сегодня покормил кота?</h2>							
							<CardsList foods={foods}></CardsList>
						</section>
					</div>
				</div>
			</main>
    </div>
  );
}

export default App;
