import { gettingData,gettingDataFor } from "./index.js";
import { renderHtml } from './atsu.js'
import { create3hourHtml, createHtml} from "./asafe.js";
export let placeName = "";
let favorite = []
let nameForStrage = "";
const testArray = []
const favBtn = document.getElementsByClassName("fav-btn")[0]
const select = document.getElementsByClassName("fav-list")[0]
favBtn.addEventListener("click", () => {
    localStorage.setItem("favlist", [])
    let checkLs = localStorage.getItem("favlist")
    console.log("LS :", checkLs);
    const option = document.createElement("option")
    option.setAttribute("id", "test")
    select.appendChild(option)
    renderOption(nameForStrage).forEach(element => {
        option.innerHTML = element
    });
    favorite.push(nameForStrage)
    testArray.push(nameForStrage)
    console.log(testArray);
    if (checkLs) {
    } else {
        const filterFav = testArray.filter((item) => {
            if (testArray === item) {
                return console.log("match")
            } else {
                console.log("Not match");
            }
        })
    }
    // if()
    // let inputName = localStorage.getItem("cityname")
    // if(favorite.length > 0){
    //     if(!favorite.includes(inputName)){

    //         });
    //         console.log(select)
    //     }else{

    //         return 
    //     }
    // }else{

    // }
})

const renderOption = (name) => {
    console.log(name);
    const optionHtml = Array(name).map((item) => {
        return (
            `
            <option id="name">${item}<option>
            `
        )
    })
    // console.log(optionHtml);
    return optionHtml
}

//Google Apl section
let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['(cities)'],
            // tyeps:['establishment'],
            // componentRestrictions:{'country': ['AU']},
            // fields: ['name']
        });
    autocomplete.addListener('place_changed', onPlaceChanged)
    // console.log(autocomplete);
}
document.addEventListener("DOMContentLoaded", initAutocomplete);
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    // console.log(place);
    // console.log(place.place_id)

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder = 'Enter a place';
    } else {
        nameForStrage = place.name
        localStorage.setItem("cityname", nameForStrage)
        placeName = place.name.toLowerCase()
        // favOption.innerHTML = getGglName(nameForStrage)
        gettingData(placeName).then((item) => {
            document.getElementById("current-weather-div").innerHTML = renderHtml(item)
        })
        gettingDataFor(placeName).then((data) => {
            console.log(data);
        })
    }
}

