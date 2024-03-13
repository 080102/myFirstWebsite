let temp = document.getElementById('temp');
let city = document.getElementById('city');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let searchBtn = document.getElementById('search-btn');




let myData = new XMLHttpRequest();
console.log(myData);

myData.open('GET','https://api.openweathermap.org/data/2.5/weather?q=germany&appid=ddbcf291998bed8f1b28c190b85c4ede');


myData.onerror = function () {
    alert('Error fetching data');
}

myData.onload = function(){
    console.log(myData.responseText);

    let newData = JSON.parse(myData.responseText);
    console.log(newData);
    
    searchBtn.addEventListener('click',function () {
        temp.value = newData.
    })
    


}
myData.send();

// const apiKey = 'ddbcf291998bed8f1b28c190b85c4ede';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=germany&appid=ddbcf291998bed8f1b28c190b85c4ede';

// async function checkWeather() {
//     const reponse = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);
// }
// checkWeather();