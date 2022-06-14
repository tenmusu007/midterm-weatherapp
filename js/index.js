import { apiKey } from "../apikey.js";

export async function gettingData(city = "vancouver"){
    // console.log(city)
    try{
        // const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.weather}&units=metric`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.weather}&units=metric`)
        // console.log(response)
        const myJson = await response.json()
        let data = {...myJson};

        return data       
    }catch(error){
        console.error(error);
    }
}
export async function gettingDataFor(city = "vancouver"){
    // console.log("asaf: " + city)
    try{
        // const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.weather}&units=metric`)
        // api.openweathermap.org/data/2.5/forecast?q={city name}&appid=6e9e6a1af743311823e535664d4bc3ec&units=metric
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6e9e6a1af743311823e535664d4bc3ec&units=metric`)
        // console.log(response)
        const myJson = await response.json()
        let data = {...myJson};
        // console.log(data);
        return data       
    }catch(error){
        console.error(error);
    }
}


