class WeatherForecast {
    constructor(apiKey) {
       this.apiKey = apiKey;
    }
   
    // Placeholder function to get weather data.
    async getWeatherData(location) {
       const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${chennai}&appid=${this.apiKey}`
       );
       const data = await response.json();
       return data;
    }
   
    // Function to generate forecast text.
    generateForecastText(weatherData) {
       const temperature = weatherData.main.temp;
       const description = weatherData.weather[0].description;
       return `Current temperature in ${weatherData.name} is ${temperature}K with ${description}.`;
    }
   
    async getForecast(location) {
       try {
         const weatherData = await this.getWeatherData(location);
         const forecastText = this.generateForecastText(weatherData);
         console.log(forecastText);
       } catch (error) {
         console.error("Failed to fetch weather data:", error);
       }
    }
   }
   
   const weatherForecast = new WeatherForecast("GzlRA6zyTy89uvyTUewbxI0VkvV2A1q0");
   weatherForecast.getForecast("New York");