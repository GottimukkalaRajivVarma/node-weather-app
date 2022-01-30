const request = require('request');
const my_key_weatherstack = '14daef60817937f5b62f57eb8e84c2f6';

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+my_key_weatherstack+'&query='+latitude+','+longitude+'&units=f';
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast;