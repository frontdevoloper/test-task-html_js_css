import React, { useState } from 'react'
import CardContent from './CardContent';

const Card = (props) => {
	const [isActiveCard, setIsActiveCard] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [isHover, setIsHover] = useState(false)

	function click() {
		setIsClicked(true);
	}

	function getTextActiveCard() {
		let text;

		if (isActiveCard) {
			text = props.food.Description;
		} else {
			text = 'Чего сидишь? Порадуй котэ, ';
		}
		return text;
	}

	function setCardVisible() {
		if (isClicked && props.food.availability) {
			setIsActiveCard(!isActiveCard);
			setIsClicked(false);
		}
	}

	function hoverEffect(isHoverCard) {
		if (props.food.availability) {
			setIsHover(isHoverCard)
		}		
	}

	function getClass(nameClass) {
		let classNameText = "";

		if (!props.food.availability) return nameClass + " _availability";

		if (isHover && !isActiveCard) {
			return nameClass + " _hover-effect";
		}

		isActiveCard ? classNameText = nameClass + " _active" : classNameText = nameClass;

		return classNameText;
	}

	return (
		<div className="cat-food__card card">
			<div 
				className={getClass("cat-food__card-wrapper")}
				onClick={() => click()}
				onMouseEnter={() => hoverEffect(true)}
				onMouseLeave={() => {
					setCardVisible();
					hoverEffect(false);
				}}
			>
				<CardContent 
					isHover={isHover} 
					isActiveCard={isActiveCard} 
					food={props.food} 
					getClass={getClass}
				/>
			</div>	
			<p className={getClass("card__offer")}>
				{
					props.food.availability ? getTextActiveCard() : `Печалька, ${props.food.Taste} закончился.`
				}
				{
					(props.food.availability && !isActiveCard) && <a href="#" className="card__link-pay">купи.</a>
				}
			</p>
			</div>
	)
}

export default Card