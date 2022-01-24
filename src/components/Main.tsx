import React, { useEffect, useState } from 'react';
import { Recipe, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';
import ResultsList from './ResultsList';
import SearchForms from './SearchForms';

const Main = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        fetchAllData(search).then(data => setRecipes(data));
    },[search])


    const handleSubmitForm = (searchTerm: string) => {

        console.log(recipes);
        setSearch(searchTerm);

    }

    return (
        <div className="Fixed-Header">
            <h1 id="App-Name-Header">Recipe Rescue!</h1>
            <SearchForms onSubmit={handleSubmitForm}/>
            <ResultsList recipes={recipes}/>
        </div>
    )
}

export default Main;