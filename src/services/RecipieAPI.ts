import axios from 'axios';
import { Recipe } from '../models/recipe';

export const fetchAllData = (label: string):Promise<Recipe[]> => {
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public", {
        params: {
            q: label,
            app_id: "bf7d0545",
            app_key: "aa78c9e273939ff55894856980a67f33",
        }
    }).then(res => res.data.hits)
}