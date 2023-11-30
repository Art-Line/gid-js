const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "f7579f1c1ce92cf310cc2b3b4d4161a2"
}
const out = document.querySelector('.js-place');

function getWeather() {
    const cityId = +document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function clearHtml(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

function createDiv(type, className, data, text) {
    let box = document.createElement(type);
    box.classList.add(className);
    box.innerHTML = (text) ? `${text}: ${data}` : data;
    return box;
}

function showWeather(data) {
    clearHtml(out);
    let fragment = document.createDocumentFragment();

    fragment.append(createDiv('div', 'place__name', `${data.name}, ${data.sys.country}`));

    let pic = document.createElement('img');
    pic.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    pic.classList.add('place__icon');
    fragment.append(pic);

    fragment.append(createDiv('div', 'place__weather', `${data.weather[0].description}`));

    let temp = Math.round(data.main.temp - 273) + '&deg;';
    fragment.append(createDiv('div', 'place__temp', temp, 'Temperature'));

    let wind = Math.round(data.wind.speed) + 'м/с';
    fragment.append(createDiv('div', 'place__wind', wind, 'Wind'));

    let humidity = Math.round(data.main.humidity) + '%';
    fragment.append(createDiv('div', 'place__humidity', humidity, 'Humidity'));

    let pressure = Math.round(data.main.pressure) + 'гПа';
    fragment.append(createDiv('div', 'place__pressure', pressure, 'Pressure'));

    out.append(fragment);

}

getWeather();
document.querySelector('#city').onchange = getWeather;
