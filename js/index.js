import { apiKey } from "../apikey.js";

export async function gettingData(city = "vancouver"){
    // console.log(city)
    try{
        // const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.weather}&units=metric`)
        const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.weather}&units=metric`)
        // console.log(response)
        const myJson = await response.json()
        let data = {...myJson};

        return data       
    }catch(error){
        console.error(error);
    }
}


