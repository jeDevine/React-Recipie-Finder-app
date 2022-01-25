import axios from 'axios';
import { Recipe, SearchTerms } from '../models/recipe';

export const fetchAllData = (potato: SearchTerms):Promise<Recipe[]> => {
    let params = {};
    if(potato.health && potato.calories){
        params = {
            q: potato.label,
            app_id: "bf7d0545",
            app_key: "aa78c9e273939ff55894856980a67f33",
            health: potato.health,
            calories: potato.calories
        }
    } else if (potato.health) {
        params = {
            q: potato.label,
            app_id: "bf7d0545",
            app_key: "aa78c9e273939ff55894856980a67f33",
            health: potato.health,
        }
    } else if (potato.calories) {
        params = {
            q: potato.label,
            app_id: "bf7d0545",
            app_key: "aa78c9e273939ff55894856980a67f33",
            calories: potato.calories
        }
    } else {
        params = {
            q: potato.label,
            app_id: "bf7d0545",
            app_key: "aa78c9e273939ff55894856980a67f33",
        };
    }
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public", {
        params: params
    }).then(res => res.data.hits)

}