import { gettingData } from "./index.js";

// const conatiner = document.getElementsByClassName("container-current")[0]
// const conatiner = $('.container-current')

// console.log(conatiner)
const div = document.createElement("div");
div.setAttribute("id","current-weather-div")
$('.container-current').append(div)
export const renderHtml =(arg)=>{
    const testarray = Array(arg).map((item, index)=>{
            return (
                `
                <div class ="current-box" key =${index}> 
                    <p class ="current-name">${item.name}</p>
                    <div class ="current-img-temp-box">
                        <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" class ="current-img" alt="">
                        <p class ="current-temp"> ${item.main.temp}°</p>
                    </div>
                    <div class="current-temp-box">
                        <p class ="current-maxtemp">H ${item.main.temp_max}</p>
                        <div class="tilde"> ~ </div>
                        <p class ="current-mintemp">L ${item.main.temp_min}</p>
                    </div>
                    <p class ="current-humidity"> Humidity : ${item.main.humidity}%</p>
                </div>
                `
                )
            })
    return testarray
            
} 
gettingData().then((obj) => {
    // console.log(obj)
    div.innerHTML = renderHtml(obj)
}).catch((err) => {
    console.error(err)
});

