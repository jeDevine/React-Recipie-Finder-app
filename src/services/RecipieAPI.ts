import axios from 'axios';
import { Recipe } from '../models/recipe';

export const fetchAllData = (search: string):Promise<Recipe> => {
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public", {
        params: {
            q: search,
            app_id: "bf7d0545",
            app_key: "%20aa78c9e273939ff55894856980a67f33"
        }
    })
}