var weather;
var y = 0;
var x = 3;

//Here I call/split up the API-link, so user inputs become viable
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=4cdc85e194ccf7b956fd68f54d76361e';
var units = '&units=metric';
var input;

//speed etc. set by framerate.
function setup() {
    frameRate(25);
    createCanvas(windowWidth, windowHeight);

    var button = select('#submit'); //submit is key-name
    button.mousePressed(weatherAsk); //Mouse scripted in html (see index file)

    input = select('#city'); //city is key-name
}

//Function to "collect" the strings of the api-link into one
function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

//function to call the data from the API
function gotData(data) {
    //println(data);
    weather = data;
}

//The different forms and shapes are made here, using api-data
function draw() {

    background(0);
    if (weather) {
        randomSeed(4);

        //Sets rain, if it is raining.. not sure if this is working though...
        if (weather.weather.main == 'rain') {
            for (i = 0; i < 30; i++) {
                ellipse(random(width), x, 3, 3);
                x = x + random(3, 7);
                if (x > height) {
                    x = 0;
                }
            }
        }

        //"The sun": Sixe defined by temperature (ofcourse). Size multiplied by 5, just to make it larger. 
        push();
        fill(200, 150, 0);
        ellipse(150, 100, weather.main.temp * 5, weather.main.temp * 5);
        pop();

        //Clouds: Speed on y-axis defined by wind-speed, size by humidity-level
        for (i = 0; i < weather.clouds.all; i++) {
            //console.log('work');
            fill(200);
            ellipse(random(0, x), random(height), weather.main.humidity / 7, weather.main.humidity / 10);
        }

        //Humidity-bar: Speed defined by air-pressure, and thickness defined by humidity
        fill(0, 50, 100);
        rect(0, y, width, weather.main.humidity / 3);

        x = x + weather.wind.speed;
        y = y + weather.main.pressure / 100;
        if (y >= height) {
            y = 0;
        }
        if (x >= width) {
            x = 0;
        }


    }
}
