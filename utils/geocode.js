const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+encodeURIComponent(address)+',356&limit=5&appid=7ffcab13c46e7198431c0f4817477bec'
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.cod || response.body.length === 0) {
            callback('Unable to find location. Enter new location.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon,
                location: response.body[0].name +', '+ response.body[0].state +', '+ response.body[0].country
            })
        }
    
    })
}

module.exports = geocode
