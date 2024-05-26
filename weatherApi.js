
const key='299644c78a32481399b70805241805';//Login and Generate a session Key from the WeatherApi.com and paste here
const city='  ';//write name of city here 
const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

fetch(url)
.then(response => response.json())
.then( Cityweather=>{

    const {location,current}=Cityweather;
    const {name,region,country,la}=location;
    const {temp_c,condition}=current;

    console.log('City:',name,region,country," ",temp_c,"*C",condition);
}).catch(err =>{console.log("ERROR !",err);});
