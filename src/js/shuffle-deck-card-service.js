export default class CardService {  
  static shuffleDeck() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  static drawCard() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=#`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}