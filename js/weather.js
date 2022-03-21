
const API_KEY = "26dc4e389b559fed93ae6c06c200fbcc";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.getElementById("temp")
        const city = document.getElementById("city")

        weather.innerText = `현재온도: ${data.main.temp}℃`;
        city.innerText = `위치: ${data.name}`;
    });
}

function onGeoError() {
    alert("위치를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);