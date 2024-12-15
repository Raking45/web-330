/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Robert King
  Date:   December 15, 2024
  Filename: script.js
*/

"use strict";

const movies = [
  {
  title: "Hackers",
  director: "Iain Softley",
  release: "1995",
  synopsis: "Teenage hackers discover a criminal conspiracy with plans to use a computer virus that will capsize five oil tankers."
},
{
  title: "Deadpool",
  director: "Tim Miller",
  release: "2016",
  synopsis: "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks."
}, 
{
  title: "War Games",
  director: "John Badham",
  release: "1983",
  synopsis: "A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III."
},
{
  title: "A Beautiful Mind",
  director: "Ron Howard",
  release: "2001",
  synopsis: "A mathematical genius, John Nash made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a harrowing journey of self-discovery."
}
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error("Movie not found"));
      }
    }, 1000); //1-second delay
  });
}



document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  const titleInput = document.getElementById("title-input").value.trim();
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");
  const movieInfo = document.getElementById("movie-info");

  // Clear previous content
  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";
  errorMessage.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);
    movieTitle.innerHTML = `<strong>Title:</strong> ${movie.title}`;
    movieDirector.innerHTML = `<strong>Director:</strong> ${movie.director}`;
    movieYear.innerHTML = `<strong>Release Year:</strong> ${movie.release}`;
    movieSynopsis.innerHTML = `<strong>Brief Synopsis:
    <hr style="width:80%; height:4px; background:black"></strong><br> ${movie.synopsis}`;
    movieInfo.style.display = "flex";
  } catch (error) {
    errorMessage.innerHTML = error.message;
    errorMessage.style.display = "block";
  }
});