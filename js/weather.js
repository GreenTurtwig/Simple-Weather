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
  document.getElementById("weather").innerHTML = "Geolocation is not supported";
  document.getElementById("temperature").innerHTML = "N/A"
  document.getElementById("timezone").innerHTML = "N/A"
}

function geoError(error) {
  if (error.code == error.PERMISSION_DENIED) {
    console.log('Geolocation is blocked! :-(');
    document.getElementById("weather").innerHTML = "Geolocation is blocked!";
    document.getElementById("temperature").innerHTML = "Please allow Simple Weather"
    document.getElementById("timezone").innerHTML = "to access your location"
  }
}


function getWeather() {
    $.getJSON("https://api.forecast.io/forecast/97ed14dac543a81bc1c3dfc4845fdbe2/"+lat+","+long+"?units=uk2&callback=?",function(json){
    var weather = JSON.parse(JSON.stringify(json));
    document.getElementById("temperature").innerHTML = (weather.currently.apparentTemperature + '<i class="wi wi-celsius"></i>');
    document.getElementById("wind_speed").innerHTML = ('<i class="wi wi-strong-wind"></i> ' + weather.currently.windSpeed + "mph")
    document.getElementById("humidity").innerHTML = ('<i class="wi wi-humidity"></i> ' + weather.currently.humidity + "%")
    //document.getElementById("timezone").innerHTML = (weather.timezone)

    if (weather.currently.icon == "partly-cloudy-day"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-day-cloudy"></i>')

    } else if (weather.currently.icon == "partly-cloudy-night"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-night-alt-cloudy"></i>')

    } else if (weather.currently.icon == "cloudy"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-cloudy"></i>')

    } else if (weather.currently.icon == "clear-day"){
        $("body").css("background-color", "#FF6F00");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-day-sunny"></i>')

    } else if (weather.currently.icon == "clear-night"){
        $("body").css("background-color", "#212121");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-night-clear"></i>')

    } else if (weather.currently.icon == "rain"){
        $("body").css("background-color", "#03A9F4");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-rain"></i>')

    } else if (weather.currently.icon == "snow"){
        $("body").css("background-color", "#BDBDBD");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = ( weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-snow"></i>')

    } else if (weather.currently.icon == "sleet"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-sleet"></i>')

    } else if (weather.currently.icon == "wind"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-strong-wind"></i>')

    } else if (weather.currently.icon == "fog"){
        $("body").css("background-color", "#9E9E9E");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-fog"></i>')

    } else if (weather.currently.icon == "hail"){
        $("body").css("background-color", "#64B5F6");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-hail"></i>')

    } else if (weather.currently.icon == "thunderstorm"){
        $("body").css("background-color", "#FF8F00");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = ('<i class="wi wi-thunderstorm"></i>')

    } else {
        $("body").css("background-color", "#b71c1c");
        $("body").css("transition", "background-color 1000ms linear");
        document.getElementById("weather").innerHTML = (weather.currently.summary);
        document.getElementById("icon").innerHTML = '<i class="wi wi-na"></i>'
    }

    document.getElementById("1").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[0].icon + '"></i>')
    document.getElementById("2").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[1].icon + '"></i>')
    document.getElementById("3").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[2].icon + '"></i>')
    document.getElementById("4").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[3].icon + '"></i>')
    document.getElementById("5").innerHTML = ('<i class="wi wi-forecast-io-' + weather.daily.data[4].icon + '"></i>')

    document.getElementById("day").innerHTML = (weather.hourly.summary)

let myNotification = new Notification('Simple Weather', {
  body: weather.currently.summary
});

    });
}