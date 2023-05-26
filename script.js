var user = parseInt(prompt("Enter a Number"));
var times = parseInt(prompt("How many times multiply this"));
var result = document.getElementById("result");

for (let index = 1; index <= times; index++) {
    result.innerHTML += `${user} * ${index} = ${index * user}<br>`;
}