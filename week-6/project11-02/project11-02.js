"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Robert King
      Date:   December 7, 2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
 //Declare codeValue and countryValue variables
 let codeValue = postalCode.value.trim();
 let countryValue = country.value;
 //Set place and region elements to empty string text
 place.value = "";
 region.value = "";

 //Use fetch to access the API (https://api.zipopotam.us)
 fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
      .then(response => {
            //Parse JSON response
            if(!response.ok) {
                  throw new Error("Invalid postal code or country.");
            }
            return response.json();
      })
      .then(json => {
            //Set place and region using JSON data
            place.value = json.places[0]["place name"];
            region.value = json.places[0]["state abbreviation"];
      })
      .catch(error => {
            //Log errors to console
            console.log("Error: ", error.message);
      });
};



