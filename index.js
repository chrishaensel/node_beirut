const weather = require('weather-js');

module.exports = {

    /**
     * get country data
     */
    getData: function () {
        const data = require('./data.json') // data : [country : [cities]]
        return data
    },
    /**
     * Get the current weather information. Uses callback to pass data
     * @param callback
     */
    getWeather : function(callback) {
        weather.find({search: 'Beirut, Lebanon', degreeType: 'C'}, function(err, result) {
            const wx = result[0].current
            callback(wx)
        });
    }
}