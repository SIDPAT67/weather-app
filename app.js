const request = require('request')
      

const url3 = 'http://api.openweathermap.org/geo/1.0/direct?q=Nandurbar,356&limit=5&appid=7ffcab13c46e7198431c0f4817477bec'

request({url: url3, json:true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.cod) {
        console.log('Unable to find location.')
    }else {
        const latitude = response.body[0].lat
        const longitude = response.body[0].lon
        console.log(response.body[0].name)
        console.log('Latitude= '+latitude+', Longitude= '+longitude)
    }
})       

const url1 = 'https://api.weatherapi.com/v1/current.json?key=1b5fbaf7350a4c9194e64156230605&q=21.7469,74.1240'
const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=21.7469&lon=74.1240&appid=7ffcab13c46e7198431c0f4817477bec'

request({url: url1, json:true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    }else {
        console.log('It is currently '+response.body.current.temp_c+' degrees out.\nThere is a '+response.body.current.precip_in+'% chance of rain.')
    }   
})

request({url: url2, json:true}, (error, response) => {
    // console.log(response.body.weather[0].description)
})


