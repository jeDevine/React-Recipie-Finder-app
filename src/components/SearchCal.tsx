import React, { FormEvent, useState } from 'react';
import { Recipe } from '../models/recipe';

interface Prop {
    onSubmit: (calories: number) => void;
}

const SearchCal = ({onSubmit}: Prop) => {
    const [calories, setCalories] = useState("");


    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        let cal = parseInt(calories)
        onSubmit(cal);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="calories">Search By Max Calorie Count<input type="number" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} min="0" step="1"/></label>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchCal;