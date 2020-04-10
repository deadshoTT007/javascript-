    //init storage
const storage=new Storage();
//get stored location data

const weatherLocation=storage.getLocationData();
//init weather objext
const weather=new Weather(weatherLocation.city,weatherLocation.state);         //this is permanent

//init UI
const ui=new UI;
//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);
//change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city=document.getElementById('city').value;
    const state=document.getElementById('state').value;
    weather.changeLocation(city,state);    //this is temporary
    storage.setLocationData(city,state);
    getWeather();
    $('#locmodal').modal('hide');
});

function getWeather(){
weather.getWeather()
.then(results=>{
    ui.paint(results);
})
.catch(err=>console.log(err));
};