const apiKey = "e9411cd4a34b9bf5dc96d1f813d74f63&units=imperial";

// AT THE START WE DON'T HAVE ANY DATA YET TO SHOW, SO WE SET VISIBILITY ATTRIBUTE TO HIDDEN
// FOR THE DATA DIV
document.getElementById("result").style.visibility = "hidden";

function tmp(){
    document.getElementById("none").textContent = "Yes";
}

// ADDING EVENT LISTENER TO THE GENERATE BUTTON
document.getElementById("generate").addEventListener("click", function (){
    if(document.getElementById("city").value !== ""){
        // FETCH THE WEATHER DATA BY CITY NAME ENTERED BY THE USER
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("city").value + "&appid=" + apiKey)
        // TRANSFORM FETCHED DATA INTO JSON FORM
        .then(response => response.json())
        .then(data => {
            // SHOWING THE FETCHED RESULT BY SETTING THE VISIBILITY ATTRIBUTE TO VISIBLE
            document.getElementById("result").style.visibility = "visible";
            console.log(data);
            document.getElementById("temp").textContent = "Temperature is: " + Math.round(data.main.temp) + " degrees";
            document.getElementById("content").textContent = "It Feels Like " + Math.round(data.main.feels_like) + " degrees";
            // API DATA DOES NOT HAVE DATE ELEMENT SO WE GET THE CURRENT DATE OURSELVES THROUGH JAVASCRIPT FUNCTION
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            document.getElementById("date").textContent = "Date: " + today;
        })
        .catch(err => alert(err));
    } else {
        alert("Please Enter City Name!");
    }
})