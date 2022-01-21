import axios from 'axios';
import { Recipe } from '../models/recipe';

export const fetchAllData = (label: string, restrictions: string, cal: string, cookTime: string):Promise<Recipe> => {
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public", {
        params: {
            q: label,
            app_id: "bf7d0545",
            app_key: "%20aa78c9e273939ff55894856980a67f33",
            health: restrictions,
            calories: cal,
            time: cookTime
        }
    }).then(res => res.data.hits)
}