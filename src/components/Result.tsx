import React, { useState } from 'react';
import { Recipe, RecipeThing } from '../models/recipe';

interface Prop {
    recipe: RecipeThing;
}

const Result = ({recipe}: Prop) => {
    console.log(recipe);
    console.log(recipe.label)
    return(
        <div className="Result">
            <h2 id="Recipe-Name">{recipe.label}</h2>
            <img src={recipe.image} alt="Image of Tastey Dish" />
            <p>Cook and Prep Time: {recipe.totalTime} minutes.</p>
            <a href={recipe.url}>Click Here to find Instructions</a>

        </div>
    )
}

export default Result;