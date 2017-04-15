var weather;

function setup() {
    createCanvas(window.height, window.width);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4cdc85e194ccf7b956fd68f54d76361e&units=metric', gotData);
}

function gotData(data) {
    //println(data);
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        ellipse(150, 100, weather.main.temp, weather.main.temp);
        ellipse(300, 100, weather.main.humidity, weather.main.humidity);

    }
}
