import React, { useState } from 'react';
import { Recipe, RecipeThing } from '../models/recipe';
import Result from './Result';

interface Prop {
    recipes: Recipe[];
}

const ResultsList = ({recipes}: Prop) => {
    const [] = useState();

    console.log(recipes)

    return (
        <div className="ResultsList">
            <h2 id="ResultsHeader"> Here's some options for you...</h2>
            {recipes.map((recipe, i) => (<Result key={i} recipe={recipe.recipe}/>))}
        </div>
    )
}


export default ResultsList;