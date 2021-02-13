const URL = "https://geo.ipify.org/api/v1?apiKey=at_izlRVKc755xpo1R6akPFxWb4NAnV4"; //API end point


// DOM elements
const defaultMap = document.getElementById("mapid");
const button = document.querySelector(".submitBtn");
const ip = document.querySelector(".ip");
const mylocation = document.querySelector(".location");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");


// Default Map settings
function setDefaultMap (lat, long) {
    let map = L.map('mapid').setView([lat, long], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
}


// Fetch Data for User's IP from API on screenload
fetch(URL)
    .then(response => response.json())
    .then((data) => {
        ip.innerHTML = data.ip;
        mylocation.innerHTML = data.location.region + ", " + data.location.city;
        timezone.innerHTML = "UTC " + data.location.timezone;
        isp.innerHTML = data.isp;
        let lat = data.location.lat;
        let long = data.location.lng;
        setDefaultMap(lat, long);  // Set map to fetched coordinates **Change later with a more efficient solution**
    });







// Custom Map settings
function setMap (lat, long) {
    let map = L.map('custommap').setView([lat, long], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
}

//Fetch Data on click by input

button.addEventListener("click", () => {
    let inputVal = document.getElementById("ipInput").value;
    let customURL = `https://geo.ipify.org/api/v1?apiKey=at_izlRVKc755xpo1R6akPFxWb4NAnV4&ipAddress=${inputVal}`;
    defaultMap.classList.add("hide-map");
    fetch(customURL)
    .then(response => response.json())
    .then((data) => {
        ip.innerHTML = data.ip;
        mylocation.innerHTML = data.location.region + ", " + data.location.city;
        timezone.innerHTML = "UTC " + data.location.timezone;
        isp.innerHTML = data.isp;
        let lat = data.location.lat;
        let long = data.location.lng;
        setMap(lat, long);  // Set map to fetched coordinates **Change later with a more efficient solution**
    });
});



