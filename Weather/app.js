//init weather objext
const weather=new Weather('Miami','US');
//init UI
const ui=new UI;
//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);
//Weather.changeLocation('london','US');
function getWeather(){
weather.getWeather()
.then(results=>{console.log(results);
    ui.paint(results);
})
.catch(err=>console.log(err));
};