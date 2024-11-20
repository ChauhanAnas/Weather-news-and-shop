const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
let dinNO = today.getDay()
const din = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const aaj = din[dinNO]
if(mm<10){mm ='0'+mm }
if(dd<10){dd ='0'+dd }
const format = dd + '/' + mm + '/' + yyyy

const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn')
const city = document.getElementById('city')
const temp_c = document.getElementById('temp_c')
const condition = document.getElementById('condition')
const lass = document.getElementById('lass')
const day1 = document.getElementById('day1')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const feel = document.getElementById('feel')
const uv = document.getElementById('uv')
const pressure = document.getElementById('pressure')
const day = document.getElementById('day')


const getInfo = async (event) =>{
    event.preventDefault()
    const cityVal = cityName.value
    const url = `http://api.weatherapi.com/v1/current.json?key=efad0ed1d92d462eb58112533230809&q=${cityVal}&aqi=no`
    const response = await fetch(url)
    const data = await response.json()
    const arrData = [data]
    city.innerHTML = arrData[0].location.name + " | " + arrData[0].location.country
    temp_c.innerHTML = arrData[0].current.temp_c + " C"
    condition.innerHTML = arrData[0].current.condition.text
    lass.innerHTML = format
    day1.innerHTML = aaj
    wind.innerHTML = arrData[0].current.wind_kph + " km/h"
    humidity.innerHTML = arrData[0].current.humidity + '%'
    feel.innerHTML = arrData[0].current.feelslike_c + ' C'
    uv.innerHTML = arrData[0].current.uv
    pressure.innerHTML = arrData[0].current.pressure_mb +" mb"
    day.innerHTML = (arrData[0].current.is_day==1?"Day":"Night")
    console.log(arrData)
}

submitbtn.addEventListener('click', getInfo)