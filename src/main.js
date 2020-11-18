// import statements
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CardService from './js/card-service.js';

// function clearField() {
  
// }

// User Interface Logic
$('document').ready(function() {
  // Shuffle the deck (on button click?)
  $('form#shuffle').submit(function(event) {
    event.preventDefault();
    // tell the API to shuffle one deck of cards

    // capture the deck_id and store in a const variable
    let promise = CardService.shuffleDeck();
    const deckID = promise.then(function(response) {
      const deck = JSON.parse(response);

      let deckId = deck.deck_id;
      console.log(deckId);
      return deckId;
    });
    
  });
  // Draw a number of cards, where number is from user input
  $('form#draw-cards').submit(function(event, deckID) {
    event.preventDefault();
    let promise = CardService.drawCard(deckID);
    const cardOne = promise.then(function(response) {
      let cardDrawn = 
      return cardDrawn;
    });
  // Display .png for each card now in hand
    // Loop through the drawing of one card at a time
    $('.output-hand').append(`<img src="${cardDrawn.}" alt="an image of one playing card">`);
  });
});




// Pasted from dino-practice-API:
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import DinoService from './js/dino-service.js';

// function clearFields() {
//   $('#num-paragraphs').val("");
//   $('#num-words').val("");
// }

// $(document).ready(function() {
//   $('form#numbers').submit(function(event) {
//     event.preventDefault();

//     let inputParaNum = parseInt($('#num-paragraphs').val());
//     let inputWordNum = parseInt($('#num-words').val());
//     clearFields();
//     let promise = DinoService.getDinoIpsum(inputParaNum, inputWordNum);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       console.log(body);
//       for (let i = 0; i < body.length; i++) {
//         $('.show-dino-ipsum').append(`<p>`);
//         for (let j = 0; j < body[i].length; j++) {
//           $('.show-dino-ipsum').append(`${body[i][j]} `);
//         }
//         $('.show-dino-ipsum').append(`</p>`);
//       }
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });

//   $('#clear-dino-ipsum').click(function() {
//     $('.show-dino-ipsum').empty();
//   });
// });