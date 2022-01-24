import React, { useState } from 'react';
import { Ingredients, Recipe, RecipeThing } from '../models/recipe';

interface Prop {
    recipe: RecipeThing;
}

const Result = ({recipe}: Prop) => {
    const [details, setDetails] = useState(false);
    console.log(recipe);
    console.log(recipe.label)
    return(
        <div className="Result" onClick={() => setDetails(true)}>
            <h2 id="Recipe-Name">{recipe.label}</h2>
            <img src={recipe.image} alt="Image of Tastey Dish" />
            <p>Cook and Prep Time: {recipe.totalTime} minutes.</p>
            <a href={recipe.url}>Click Here to find Instructions</a>
            {/* tenenorary oporater for when details is true */}
            <button onClick={() => setDetails(true)}>Details</button>
        </div>
    )
}

export default Result;