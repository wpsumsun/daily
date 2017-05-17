var axios = require('axios');
var data = {};

if (process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}

axios.get('http://api.jirengu.com/weather.php', data)
    .then(function (response) {
        var weatherInfo = response.data.results[0].weather_data[0];
        console.log('城市：' + response.data.results[0].currentCity)
        console.log('pm25：' + response.data.results[0].pm25)
        console.log('今日：' + weatherInfo.date)
        console.log('天气：' + weatherInfo.weather)
        console.log('风象：' + weatherInfo.wind)
        console.log('温度范围：' + weatherInfo.temperature)
    })
    .catch(function (error) {
        console.log(error);
    });