#Beirut

Gets country data for Lebanon.
Even though this package works as it should, it is merely a simple test and my very first npm package.

I will constantly work on this, add more data and features - even though nobody might ever use it :)

--- love lebanon ---

Usage

####Get country data
```
const beirut = require('beirut)
const data = beirut.getData()
```


####Get current weather data
```
const beirut = require('beirut)
const weather = beirut.getWeather(function(wx) {
    console.log(wx)
})
```

