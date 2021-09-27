var button=document.querySelector(".button");
var inputvalue=document.querySelector(".inputvalue");
var nameval=document.querySelector(".name");
var desc=document.querySelector(".desc");
var temp=document.querySelector(".temp");
var pressure=document.querySelector(".pressure");
var humidity=document.querySelector(".humidity");
var maxtemp=document.querySelector(".max_temp");
var mintemp=document.querySelector(".min_temp");
var country=document.querySelector(".country");


button.addEventListener('click',function()
{
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=1ff4fabb95d474aa3c3c0ef3c88203db')
    .then(response=>response.json())  
    .then(data=>{
    var namevalue=data['name'];
    var temperature=data['main']['temp'];
    var descvalue=data['weather'][0]['description'];
    var mintempval=data['main']['temp_min'];
    var maxtempval=data['main']['temp_max'];
    var humid=data['main']['humidity'];
    var press=data['main']['pressure'];
    var count=data['sys']['country']

    nameval.innerHTML="City Name: "+ namevalue;
    desc.innerHTML="Weather: "+ descvalue;
    temp.innerHTML="Temperature: "+ temperature;
    pressure.innerHTML="Pressure: "+ press;
    maxtemp.innerHTML="Max Temperature: "+maxtempval;
    mintemp.innerHTML="Min Temperature: "+mintempval;
    country.innerHTML="Country: "+count;
    humidity.innerHTML="Humidity: "+humid;    

    })
    .catch(error=>alert('City Does Not Exist'))


});


