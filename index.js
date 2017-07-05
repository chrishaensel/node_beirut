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
     * Get the current weather information. Returns a promise
     */
    getWeather : function() {

        return new Promise(function (fulfill, reject){

            weather.find({search: 'Beirut, Lebanon', degreeType: 'C'}, function(err, result) {
                const wx = result[0].current
                if (err) reject(err);
                else fulfill(wx);
                //callback(wx)
            });

        });


    }
}