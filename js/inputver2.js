import { gettingData, gettingDataFor } from "./index.js";
import { renderHtml } from './atsu.js'
export let placeName = "";
let nameForStrage = "";
let checkArray = []
const favBtn = document.getElementsByClassName("fav-btn")[0]
const select = document.getElementsByClassName("fav-list")[0]
localStorage.setItem("favlist", [])
const favorite = []
favBtn.addEventListener("click", () => {
    let checkLs = localStorage.getItem("favlist")
    const option = document.createElement("option")
    option.setAttribute("id", "test")
    favorite.push(nameForStrage)
    console.log("favorite " + favorite)
    if (checkLs) {
        console.log("LS :", checkLs);
        if (!checkArray.includes(nameForStrage)) {
            checkArray.push(nameForStrage)
            console.log("Not match");
            console.log("checkArray " + checkArray)
            select.appendChild(option)
            renderOption(checkArray).forEach(element => {
                console.log(element);
                option.innerHTML =  element
            });
            localStorage.setItem("favlist", checkArray)
        } else {
            console.log(checkArray);
            console.log("match");
            const checkLs = checkArray.filter((item)=>{
                if(nameForStrage !== item){
                    return item
                }
            })
            console.log(checkLs);
            select.innerHTML = " "
            const option2 = document.createElement("option")
            const favOpt = document.createElement("option")
            favOpt.innerHTML = `Fav`
            select.appendChild(favOpt)
            renderOption(checkLs).forEach(element => {
                console.log(element);
                select.innerHTML += `${element}`
                // select.appendChild(option2)
            });
            localStorage.setItem("favlist", checkLs)
            checkArray = checkLs
            
        }
    } else {
        console.log("else");
        checkArray.push(nameForStrage)
        localStorage.setItem("favlist", checkArray)
        renderOption(checkArray).forEach(element => {
            select.innerHTML = `<option value="none" id="Favoption">Fav</option>
            ${element}`
        });
    }
})

const renderOption = (name) => {
    const optionHtml = name.map((item) => {
        return(
            `
            <option value="" key="">${item}</option>
            `
            )
    })
    console.log(optionHtml);
    return optionHtml
}

//Google Apl section
let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['(cities)'],
        });
    autocomplete.addListener('place_changed', onPlaceChanged)
}
document.addEventListener("DOMContentLoaded", initAutocomplete);
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder = 'Enter a place';
    } else {
        nameForStrage = place.name
        localStorage.setItem("cityname", nameForStrage)
        placeName = place.name.toLowerCase()
        gettingData(placeName).then((item) => {
            document.getElementById("current-weather-div").innerHTML = renderHtml(item)
        })
        gettingDataFor(placeName).then(() => {
            // console.log(data);
        })
    }
}

