import React from 'react'
import Card from './Card'

const CardsList = ({foods}) => {
	return (
		<div className="cat-food__cards">
			{foods.map((food) =>
				<Card food={food} key={food.id}></Card>
			)}
		</div>
	)
}

export default CardsList	