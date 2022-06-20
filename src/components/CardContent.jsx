import React from 'react'

const CardContent = ({isHover, isActiveCard, food, getClass}) => {
	return (
		<div className="card__content food-name">
					<div className="food-name__description">
						<p className={getClass("card__subtitle")}>
							{
								isHover && !isActiveCard ? 
								"Котэ не одобряет?" :
								"Сказочное заморское явство"
							}
						</p>
						<h1 className="card__food-name">{food.Name}</h1>
						<p className="card__taste-food">{food.Taste}</p>
						<p className="card__gift text">
							{food.Portions} порций
						</p>
						<p className="card__gift">мышь в подарок</p>
						<p className="card__gift">{food.Portions > 40 && " заказчик доволен"}</p>
					</div>
					<div className={getClass("card__food-weight")}>
						<p className="card__food-weight-text">{food.Weight}</p>
							<p className="card__food-weight-mass">кг</p>
					</div>
				</div>
	)
}

export default CardContent