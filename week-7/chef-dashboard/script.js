/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:
  Date:
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Chef One",
    specialty: "French Cuisine",
    weakness: "Management Style",
    restaurantLocation: "Morgantown, WV, USA"
  },
  {
    name: "Chef Two",
    specialty: "Italian Cuisine",
    weakness: "Customer Service",
    restaurantLocation: "Pittsburgh, PA, USA"
  },
  {
    name: "Chef Three",
    specialty: "Asian Fusion",
    weakness: "Interpersonal Skills",
    restaurantLocation: "New York, NY, USA"
  }
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[0]) : reject("Failed to fetch chef 1's information");
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[1]) : reject("Failed to fetch chef 2's information");
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[2]) : reject("Failed to fetch chef 3's information");
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
.then(results => {
  results.forEach((result, index) => {
    const chefDiv = document.getElementById(`chef${index + 1}`);
    if (result.status === "fulfilled") {
      const chef = result.value;
      chefDiv.innerHTML = `
      <h2>${chef.name}</h2>
      <p><strong>Specialty: </strong> ${chef.specialty}</p>
      <p><strong>Weakness: </strong> ${chef.weakness}</p>
      <p><strong>Restaurant Location: </strong> ${chef.restaurantLocation}</p>
      `;
    } else {
      chefDiv.innerHTML = `<p class="error">${result.reason}</p>`
    }
  });
});