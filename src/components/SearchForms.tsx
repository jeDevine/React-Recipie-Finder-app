import React, { FormEvent, useEffect, useState } from 'react'
import { Recipe, RecipeThing, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';


interface Prop {
    onSubmit: (searchTerm: string) => void;
}

const SearchForms = ({onSubmit}: Prop) => {
    const [recipe, setRecipe] = useState<RecipeThing[]>([]);
    const [label, setLabel] = useState("");



    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        onSubmit(label);
    }
    
    return (
        <div className='Search-Container'>
            <div className='Form-Container'>
            <form id="The-Form" onSubmit={handleSubmit}>
                <input type="text" name="label" id="Search-Bar" placeholder='What are you in the mood for?' value={label} onChange={(e) => setLabel(e.target.value)}/>
                <img src="hand.png" id="chef-hand"/>
                <button type="submit" id="Search-Button">SEARCH</button>
            </form>
            </div>
        </div>
    )
}



export default SearchForms;