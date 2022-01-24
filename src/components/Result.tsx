import React, { useState } from 'react';
import { Recipe } from '../models/recipe';

interface Prop {
    recipe: Recipe;
}

const Result = ({recipe}: Prop) => {
    return(
        <div className="Result">
            <h2 id="Recipe-Name">{recipe.label}</h2>
            <img src={recipe.image} alt="Image of Tastey Dish" />
            <ul>
                <li>{recipe.ingredients}</li>
            </ul>
            
        </div>
    )
}

export default Result;