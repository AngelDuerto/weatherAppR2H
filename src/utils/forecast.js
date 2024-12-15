const request = require('request')

const forecast = (latitude, longitude, temperature, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dd2d78e72228af7fb772c619adc72e22&query=' + latitude + ',' + longitude + `&units=${temperature}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback( undefined, body.current.weather_descriptions[0] + `, It is currently ${body.current.temperature}. Have a great day!`
        );
        }
    });
}

module.exports = forecast

// tried adding chance of rain but was not working with new API (There is a ${body.current.precipProbability}% chance of rain)