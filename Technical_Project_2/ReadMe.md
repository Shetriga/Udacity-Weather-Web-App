# Openweathermap Project

# Author
    Mahmoud Atef Aboulsoud Ali

## Description
    Openweathermap Web App that displays weather data for specific location determined by the user.

## Technologies used
    - Html 5
    - CSS
    - Javascript
    - Nodejs
    - npm 
    - Express
    - cors()
    - body-parser

## How to run the code
    - After setting up the local environment and going to home page, there are two inputs. One of them is mandatory which is the city name to get weather data in it, and the other one is optional which is how the user feels the temperature is like.
    - Once filling the data and hitting "GENERATE" button, The required results are shown to the user, which are (temperature, feels_like and date). 

## Requirements 
    (Project Environment Setup)
        - Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
        - The Express app instance should be pointed to the project folder with .html, .css, and .js files.
        - The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
        - The body-parser package should be installed and included in the project.
        - Local server should be running and producing feedback to the Command Line through a working callback function.
        - Create API credentials on OpenWeatherMap.com

    (APIs And Routes)
        - There should be a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.
        - The personal API Key for OpenWeatherMap API is saved in a named const variable.
        - The API Key variable is passed as a parameter to fetch().
        - Data is successfully returned from the external API.
        - There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
        - There should be an asynchronous function to fetch the data from the app endpoint
        - You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
    
    (Dynamic UI)
        - The input element with the placeholder property set to “enter zip code here” should have an id of zip.
        - The textarea included in project HTML should have an id of feelings.
        - The button included in project HTML should have an id of generate.
        - Adds an event listener to an existing HTML button from DOM using Vanilla JS.
        - Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.

## Additional features
    - Making Sure that the user has entered a value to search by it. If the user did not enter a value, the window pops up a message to require input by the user

## Methods Used include
    - Date() javascript built-in function
    - Nodejs + npm
    - Express
    - body-parser, cors.
    - fetch() Javascript function in order to fetch data from our Openweathermap API
    - Openweathermap API Credentials (API Key)
    - document.getElementById()

## Credits
    - Mdn documentation. There is no doubt that documentation is the place to go whenever feeling stuck or need to know more about specific topci.
    - Stackoverflow, the forums and discussions are super helpful to know how to overcome challenges and have multiple ways to achieve the desired outcome from your code. 

## Notes
    - I tried to make the project search with the zip code, but all zip codes i have entered seemed to be wrong, so the problem or me was getting the correct codes, not difficulty on implementing the search by zip code. The difference between searching by city name and searching by zip code is instead of the "q" keyword in the search, we will write "zip". So in order to make the project work i changed it to make it search by city name. 