//Get lat and long
var lat;
var long;
var geoSuccess = function(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  getWeather();
};
if (navigator.geolocation) {
  console.log('Geolocation is supported :-)');
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}
else {
  console.log('Geolocation is not supported :-(');
  document.getElementById("weather").innerHTML = "Geolocation is not supported!";
    document.getElementById("temperature").innerHTML = ""
    document.getElementById("wind_speed").innerHTML = ""
    //document.getElementById("humidity").innerHTML = ""
}
function geoError(error) {
  if (error.code == error.PERMISSION_DENIED) {
    console.log('Geolocation is blocked! :-(');
    document.getElementById("weather").innerHTML = "Geolocation is blocked!";
    document.getElementById("temperature").innerHTML = "Please allow Simple Weather"
    document.getElementById("wind_speed").innerHTML = "to access your location"
    //document.getElementById("humidity").innerHTML = ""
  }
}

//Get weather for lat anf long
function getWeather() {
    $.getJSON("https://api.forecast.io/forecast/97ed14dac543a81bc1c3dfc4845fdbe2/"+lat+","+long+"?units=uk2&callback=?",function(json){
    var weather = JSON.parse(JSON.stringify(json));
    document.getElementById("temperature").innerHTML = (weather.currently.apparentTemperature + '<i class="wi wi-celsius"></i>');
    document.getElementById("wind_speed").innerHTML = ('<i class="wi wi-strong-wind"></i> ' + weather.currently.windSpeed + "mph")
    //document.getElementById("humidity").innerHTML = ('<i class="wi wi-humidity"></i> ' + weather.currently.humidity + "%")
    //document.getElementById("timezone").innerHTML = (weather.timezone)

    if (weather.currently.icon == "partly-cloudy-day"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-day-cloudy"></i>')

    } else if (weather.currently.icon == "partly-cloudy-night"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-night-alt-cloudy"></i>')

    } else if (weather.currently.icon == "cloudy"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-cloudy"></i>')

    } else if (weather.currently.icon == "clear-day"){
        $("body").css("background-color", "#FF6F00");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#FF6F00">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-day-sunny"></i>')

    } else if (weather.currently.icon == "clear-night"){
        $("body").css("background-color", "#212121");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#212121">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-night-clear"></i>')

    } else if (weather.currently.icon == "rain"){
        $("body").css("background-color", "#03A9F4");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#03A9F4>' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-rain"></i>')

    } else if (weather.currently.icon == "snow"){
        $("body").css("background-color", "#BDBDBD");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#BDBDBD">' );
        document.getElementById("weather").innerHTML = ( weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-snow"></i>')

    } else if (weather.currently.icon == "sleet"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-sleet"></i>')

    } else if (weather.currently.icon == "wind"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-strong-wind"></i>')

    } else if (weather.currently.icon == "fog"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#9E9E9E">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-fog"></i>')

    } else if (weather.currently.icon == "hail"){
        $("body").css("background-color", "#64B5F6");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#64B5F6">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-hail"></i>')

    } else if (weather.currently.icon == "thunderstorm"){
        $("body").css("background-color", "#FF8F00");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#FF8F00">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-thunderstorm"></i>')

    } else {
        $("body").css("background-color", "#b71c1c");
        $("body").css("transition", "background-color 1000ms linear");
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content="#b71c1c">' );
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = '<i class="wi wi-na"></i>'
    }

    //Set the table for the forecast
    document.getElementById("1").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[0].icon + '"></i>')
    document.getElementById("2").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[1].icon + '"></i>')
    document.getElementById("3").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[2].icon + '"></i>')
    document.getElementById("4").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[3].icon + '"></i>')
    document.getElementById("5").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[4].icon + '"></i>')
    document.getElementById("table").style.visibility = "visible";

    //Set the table for the days of the week
    var d = new Date();
    var n = d.getDay();
    if (n == 0){
        document.getElementById("1day").innerHTML = "Sun"
        document.getElementById("2day").innerHTML = "Mon"
        document.getElementById("3day").innerHTML = "Tue"
        document.getElementById("4day").innerHTML = "Wed"
        document.getElementById("5day").innerHTML = "Thu"
    } else if (n == 1){
        document.getElementById("1day").innerHTML = "Mon"
        document.getElementById("2day").innerHTML = "Tue"
        document.getElementById("3day").innerHTML = "Wed"
        document.getElementById("4day").innerHTML = "Thu"
        document.getElementById("5day").innerHTML = "Fri"
    } else if (n == 2){
        document.getElementById("1day").innerHTML = "Tue"
        document.getElementById("2day").innerHTML = "Wed"
        document.getElementById("3day").innerHTML = "Thu"
        document.getElementById("4day").innerHTML = "Fri"
        document.getElementById("5day").innerHTML = "Sat"
    } else if (n == 3){
        document.getElementById("1day").innerHTML = "Wed"
        document.getElementById("2day").innerHTML = "Thu"
        document.getElementById("3day").innerHTML = "Fri"
        document.getElementById("4day").innerHTML = "Sat"
        document.getElementById("5day").innerHTML = "Sun"
    } else if (n == 4){
        document.getElementById("1day").innerHTML = "Thu"
        document.getElementById("2day").innerHTML = "Fri"
        document.getElementById("3day").innerHTML = "Sat"
        document.getElementById("4day").innerHTML = "Sun"
        document.getElementById("5day").innerHTML = "Mon"
    } else if (n == 5){
        document.getElementById("1day").innerHTML = "Fri"
        document.getElementById("2day").innerHTML = "Sat"
        document.getElementById("3day").innerHTML = "Sun"
        document.getElementById("4day").innerHTML = "Mon"
        document.getElementById("5day").innerHTML = "Tue"
    } else if (n == 6){
        document.getElementById("1day").innerHTML = "Sat"
        document.getElementById("2day").innerHTML = "Sun"
        document.getElementById("3day").innerHTML = "Mon"
        document.getElementById("4day").innerHTML = "Tue"
        document.getElementById("5day").innerHTML = "Wed"
    }


    document.getElementById("day").innerHTML = (weather.hourly.summary)

let myNotification = new Notification('Simple Weather', {
  body: weather.currently.summary
});

    });
}