let wheather = {
    apikey:"4d59de131fb1883be09ddd734438373c",
    fetchWeather:function(cityy){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityy + "&units=metric&appid="+this.apikey)
            .then(res=>res.json())
                .then(data=>this.displayResult(data));
    },
    displayResult:function(data){
        const { name } = data
        const { icon , description } = data.weather[0];
        const{ temp , humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText="wheather in "+ name;
        document.querySelector(".temp").innerText=Math.floor(temp)+"°C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidityy").innerText="humidity -"+ " " + humidity+ "%";
        document.querySelector(".windd").innerText="wind speed -"+ " "+speed+ "km/hr";
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }

}
wheather.fetchWeather("delhi");
document.querySelector(".search button").addEventListener("click",()=>{
        wheather.search();
        setTimeout(()=>{backToDefalut()},3000);
    })

function backToDefalut(){
    document.querySelector(".search-bar").value="";
}
document.querySelector(".search-bar").addEventListener("keyup",(e)=>{
    if(event.key=="Enter"){
        wheather.search();
    }
})
