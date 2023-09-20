import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getData =async (category:string) => {
    
    try {
        const result = await axios.get(`${BASE_URL}/${category}`)
        return result;
    } catch (error) {
        console.error(error);
    }
}