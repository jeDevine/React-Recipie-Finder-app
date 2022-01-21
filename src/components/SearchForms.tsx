import React, { FormEvent, useEffect, useState } from 'react'
import { Recipe, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';


interface Prop {
    onSubmit: (recipe: SearchTerms) => void;
}

const SearchForms = ({onSubmit}: Prop) => {
    const [recipe, setRecipe] = useState<Recipe[]>([]);
    const [calories, setCalories] = useState("");
    const [label, setLabel] = useState("");
    const [totalTime, setTotalTime] = useState("");
    const [healthLabel, setHealthLabel] = useState("");


    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(healthLabel)
        let results: SearchTerms = {
            label: label,
            healthLabel: healthLabel,
            calories: parseInt(calories),
            totalTime: parseInt(totalTime),
        }
        
        onSubmit(results);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="calories">Search By Max Calorie Count<input type="number" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} min="0" step="1"/></label>
                <label htmlFor="label">Search By Name<input type="text" name="label" value={label} onChange={(e) => setLabel(e.target.value)}/></label>
                <label htmlFor="totalTime">Search By Time to Cook (minutes)<input type="number" name="totalTime" value={totalTime} onChange={(e) => setTotalTime(e.target.value)}/></label>
                <select name="health-restrictions" id="health-dropdown" value={healthLabel} onChange={(e) => setHealthLabel(e.target.value)}>
                    <option value="">Select one</option>
                    <option value="alcohol-cocktail"> alcohol-cocktail  </option>
                    <option value="alcohol-free"> alcohol-free  </option>
                    <option value="celery-free"> celery-free  </option>
                    <option value="crustacean-free"> crustacean-free  </option>
                    <option value="dairy-free"> dairy-free  </option>
                    <option value="DASH"> DASH  </option>
                    <option value="egg-free"> egg-free  </option>
                    <option value="fish-free"> fish-free  </option>
                    <option value="fodmap-free"> fodmap-free  </option>
                    <option value="gluten-free"> gluten-free  </option>
                    <option value="immuno-supportive"> immuno-supportive  </option>
                    <option value="keto-friendly"> keto-friendly  </option>
                    <option value="kidney-friendly"> kidney-friendly  </option>
                    <option value="kosher"> kosher  </option>
                    <option value="low-fat-abs"> low-fat-abs  </option>
                    <option value="low-potassium"> low-potassium  </option>
                    <option value="low-sugar"> low-sugar  </option>
                    <option value="lupine-free"> lupine-free  </option>
                    <option value="Mediterranean"> Mediterranean  </option>
                    <option value="mollusk-free"> mollusk-free  </option>
                    <option value="mustard-free"> mustard-free  </option>
                    <option value="no-oil-added"> no-oil-added  </option>
                    <option value="paleo"> paleo  </option>
                    <option value="peanut-free"> peanut-free  </option>
                    <option value="pescatarian"> pescatarian  </option>
                    <option value="pork-free"> pork-free  </option>
                    <option value="red-meat-free"> red-meat-free  </option>
                    <option value="sesame-free"> sesame-free  </option>
                    <option value="shellfish-free"> shellfish-free  </option>
                    <option value="soy-free"> soy-free  </option>
                    <option value="sugar-conscious"> sugar-conscious  </option>
                    <option value="sulfite-free"> sulfite-free  </option>
                    <option value="tree-nut-free"> tree-nut-free  </option>
                    <option value="vegan"> vegan  </option>
                    <option value="vegetarian"> vegetarian  </option>
                    <option value="wheat-free"> wheat-free  </option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}



export default SearchForms;