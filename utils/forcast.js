const request = require('request')

const forcast = (latitude, longitude, callback) => {
    
    const url = 'https://api.weatherapi.com/v1/current.json?key=1b5fbaf7350a4c9194e64156230605&q=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined,
                response.body.location.name +', '+ response.body.location.region+', ' + response.body.location.country + '\nIt is currently ' + response.body.current.temp_c + ' degrees out.\nHumidity is '+ response.body.current.humidity + '%.'
            )
        }
    
    })
}
module.exports = forcast
