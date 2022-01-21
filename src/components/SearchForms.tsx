import React, { useEffect, useState } from 'react'
import { Recipe } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';
import SearchCal from './SearchCal'

const SearchForm = () => {
    const [recipe, setRecipe] = useState<Recipe[]>([]);
    const [calorieChoice, setCaloriesChoice] = useState("");

    useEffect(()=>{
        if (calorieChoice){
        }
    }, [calorieChoice])

    const findByCalories = (cal: number) => {

    }

    return (
        <div>
            <SearchCal onSubmit={findByCalories}/>
        </div>
    )
}