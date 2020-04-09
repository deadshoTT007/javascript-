class Weather{
constructor(city,state){
    this.apikey='ee6801b3a6740281dcc2533c033642f7';
this.city=city;
this.state=state;
}
async getWeather(){
 //   const response=await fetch(`http://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json`);
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apikey}`);
    const responseData=await response.json();
    return responseData;
}
//change weather
changeLocation(city,state){
    this.city=city;
    this.state=state;
}
}