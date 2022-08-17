import { BASE_URL } from "./Constants";

export const getAPI = async endpoint =>{
    const url = BASE_URL + endpoint;

    try{
        return await fetch(url)
        .then(async response=>await response.json())
        .then(async json =>{
            let data = await json;
            // console.log(data.data);
            return data;
        })

    }
    catch(error){

    }
}
