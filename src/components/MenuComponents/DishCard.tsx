import React from 'react'
import { Category, Dish } from '../../overmind/menu/state'
import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Defines the properties of the dishcard 
type DishProps = {
    dish: Dish,
    category: Category & { dishes: Dish[]; },
}

// Dish items with limited information that are shown in the menu view
export const DishCard: React.FunctionComponent<DishProps> = ({ dish }) => {

    return (
        <div className="flex gap-2 justify-center items-center cursor-pointer" id="dishCard" data-cy="dishCard">
            <div className="self-start flex-2/4">
                {/* Name of the dish */}
                <p className="text-lg font-bold">
                    {dish.title}
                </p>
                {/* Dishcription TODO: Platzhalter austauschen */}
                <p className="self-start text-xs text-grey">
                    {dish.description}
                </p>
                {/* Price of the dish */}
                <p className="self-start gap-1 text-base font-bold text-red">
                    {priceToLocal(dish.price)}
                </p>
            </div>
            {/* Image of the dish */}
            <img alt={dish.title} className="self-center w-20 h-16 object-cover rounded-lg" src={dish.image}></img>
            {/* More info button */}
            <button className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs">
                <FontAwesomeIcon icon="plus" />
            </button>
        </div>
    )
}
