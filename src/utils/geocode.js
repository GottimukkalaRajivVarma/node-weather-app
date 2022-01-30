const request = require('request');
const my_key_mapbox = 'pk.eyJ1IjoicmFqaXZ2YXJtYTI4OTMiLCJhIjoiY2t5cGI0dmRsMDg5OTJwbnAwZjBvcmFraSJ9.Pmyg_5bYIj5txt94sFm03A';

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+my_key_mapbox+'&limit=1'
    request({url, json: true}, (error,{body}) => {
        if(error) {
            console.log('got error');
            callback('Unable to connect ro location services!', undefined);
        } else if(body.features.length === 0) {
            console.log('0 matches')
            callback('Unable to find location, try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;