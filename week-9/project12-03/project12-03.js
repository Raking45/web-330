"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Robert King
      Date:   December 22, 2023

      Filename: project12-03.js
*/


$(document).ready(function() {
      // Add click() method to article > h2
      $('article > h2').click(function(e) {
            // Declare heading variable, list variable, & headingImage variable
            let heading = $(e.target).closest('h2'); // Used "closest" to expand click range on images.
            let list = heading.next();
            let headingImage = heading.find('img');

            // Hide & Show using slideToggle 
            list.slideToggle(500);
            // Change + / - images
            if (headingImage.attr('src') === 'plus.png') {
                  headingImage.attr('src', 'minus.png');
            } else {
                  headingImage.attr('src', 'plus.png');
            }
      });
});