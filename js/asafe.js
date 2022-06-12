import { gettingDataFor } from "./index.js";




  const sectionDay = document.getElementsByClassName("container-forDay")[0]
  
  const forDay = document.createElement("div")
  sectionDay.append(forDay)

function MainDataFunction() {

  const sectionHour = document.getElementsByClassName("container-forHour")[0]
  
  const forHour = document.createElement("div")
  sectionHour.append(forHour)
  


  gettingDataFor().then((data) => { 
  //     let fiveDaysArr = []
  //     // console.log(data)
  //     const forCast = Array(data).map((item, index)=>{
  //         console.log(item.list)
  //         for(let i in item.list){
  //             if(i % 8 === 0){
  //             fiveDaysArr.push(item.list[i])
  //             console.log(fiveDaysArr);
  //         }
  //     // return forCast
  //  }})
      const daysCast = []
      const hoursCast = []   
          
      // console.log(Number(span) + Number(span * 7));
      console.log(data.list);
      for (let i = 0; i < data.list.length ; i += 8) {
          daysCast.push(data.list[i])
      }
      // console.log(daysCast)
    
      for (let i = 0; i < 8; i++) {
          hoursCast.push(data.list[i])
      }
      // console.log(hoursCast)
    
    forHour.className = "continer-flex"  
    forDay.className = "continer-flex"  
    forHour.innerHTML = create3hourHtml(hoursCast)
    forDay.innerHTML = createHtml(daysCast)
  })

      function changeDataWeather() {
        console.log(this.id)
        // console.log(span);
        // console.log(sectionHour.innerHTML)
        MainDataFunction(sectionHour.innerHTML, this.id)
      }
      
      
      const changeDays = document.querySelectorAll(".days-weather")
        changeDays.forEach((day) => { 
          day.addEventListener("click",changeDataWeather)     
      }); 
}

const createHtml = (daysCast) => {
  // console.log(daysCast)
  const test = daysCast.map((item, index) => {
    // console.log(item);
    return (
      `
    <div class="days-weather" id="${index}">
        <img  class="weather-icon" src="http://openweathermap.org/img/wn/${
                item.weather[0].icon
              }@2x.png" />
        <div>
          <p>${item.dt_txt.split(" ")[0]}</p>
          <p>${item.dt_txt.split(" ")[1]}</p>
          <p>${item.weather[0].description}</p>
          <p>${parseInt(item.main.temp)} ℃</p>
          <span>${parseInt(item.main.temp_max)} 
          ℃</span> / <span>${parseInt(item.main.temp_min)} ℃</span>
        </div>
      </div>
      `
    )
    
  })
  return test
}
// forDay.className = "continer-flex"
// forDay.innerHTML = createHtml 

const create3hourHtml = (hoursCast) => {
  // console.log(daysCast)
  const test = hoursCast.map((item, index) => {
    // console.log(item);
    return (
      `
    <div class="days-weather" id="${index}">
        <img  class="weather-icon" src="http://openweathermap.org/img/wn/${
                item.weather[0].icon
              }@2x.png" />
        <div>
          <p>${item.dt_txt.split(" ")[0]}</p>
          <p>${item.dt_txt.split(" ")[1]}</p>
          <p>${item.weather[0].description}</p>
          <p>${parseInt(item.main.temp)} ℃</p>
          <span>${parseInt(item.main.temp_max)} 
          ℃</span> / <span>${parseInt(item.main.temp_min)} ℃</span>
        </div>
      </div>
      `
    )
    
  })
  return test
}
// forhours.className = "continer-flex"
// forhours.innerHTML = create3hourHtml 

MainDataFunction(0)
// gettingDataFor()
