import { gettingData } from "./index.js";
import { renderHtml } from './atsu.js'
export let placeName = "";
let favorite =[]
let nameForStrage = "";
const favBtn = document.getElementsByClassName("fav-btn")[0]
const select = document.getElementsByClassName("fav-list")[0]
favBtn.addEventListener("click", () => {
    let inputName = localStorage.getItem("cityname")
    if(favorite.length > 0){
        console.log(favorite);
        // let getData = JSON.parse(localStorage.getItem("FavList"))
        if(!favorite.includes(inputName)){
            favorite.push(nameForStrage);
            localStorage.setItem("FavList",JSON.stringify(favorite))
            // console.log(getData)
            console.log("yes");
            console.log(favorite)
            const option =document.createElement("option")
            option.setAttribute("id" ,`${inputName.split(" ").join("_")}`)
            select.appendChild(option)
            renderOption(favorite).forEach(element =>{
                console.log(element);
                option.innerHTML =element
            });
            console.log(select)
        }else{
            let optEl = document.querySelector(`option#${inputName.split(" ").join("_")}`)
            console.log(optEl);
            optEl.remove()
            // console.log(deleOpt);
            return 
        }
    }else{
        console.log("else");
        const option2 =document.createElement("option")
        option2.setAttribute("id", `${inputName.split(" ").join("_")}`)
        select.appendChild(option2)
        favorite.push(inputName)
        option2.innerHTML =
        `
        <option value="" >${inputName}</option>
        
        `
    }
})

const renderOption = (name) => {
    console.log(name)
    const crateOption = name.map((item)=>{
        return (
            `
            <option value="" key="">${item}</option>
            
            `
        )
    })
    return crateOption
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
    // console.log(place);
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
    }
}

