/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Robert King
  Date:   November 3, 2024
  Filename:
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // Form field entry validation
  if (!name || !gender || !characterClass) {
    alert("Please fill out all fields.");
    return;
  }

  // TODO: Create character
  const character = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  const characterOutput = document.getElementById("characterOutput");
  characterOutput.innerHTML = `
  <p><strong>Name:</strong><b>${character.getName()}</b></p>
  <p><strong>Gender:</strong><b>${character.getGender()}</b></p>
  <p><strong>Class:</strong><b>${character.getClass()}</b></p>
  `;
});