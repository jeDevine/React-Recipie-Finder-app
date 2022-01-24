import React, { useEffect, useState } from 'react';
import { Recipe, RecipeThing, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';
import AdvancedSearch from './AdvancedSearch';
import ResultsList from './ResultsList';
import SearchForms from './SearchForms';

const Main = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [search, setSearch] = useState<SearchTerms>({label: "", healthLabel: "", calories: 0});

    const handleSubmitForm = (searchTerm: SearchTerms) => {
        console.log(recipes);
        setSearch(searchTerm)
    }
    
    useEffect(() => {
        fetchAllData(search).then(data => setRecipes(data));
    },[search])
    
    return (
        <div className="Fixed-Header">
            <h1 id="App-Name-Header">Recipe Rescue!</h1>
            <SearchForms onSubmit={handleSubmitForm}/>
            <AdvancedSearch onSubmit={handleSubmitForm}/>
            <ResultsList recipes={recipes}/>
        </div>
    )
}

export default Main;