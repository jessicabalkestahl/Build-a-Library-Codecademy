class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut (checkout) {
    this._isCheckedOut = checkout;
  }

  getAverageRating () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = this.ratings.reduce(reducer);
    return sum/this.ratings.length
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rate) {
    if (rate >=1 && rate <=5) {
    this.ratings.push(rate) 
    }
    else {
      console.log("Please rate between 1 - 5!")
    }
  }
}

class Book extends Media {
  constructor (author, pages, title) {
    super (title);
    this._author = author;
    this._pages = pages;
  }
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}

class Movie extends Media {
  constructor (director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}

class CD extends Media {
  constructor (artist, songs, title) {
    super (title);
    this._artist = artist;
    this.songs = [songs];
  }
  get artist () {
    return this._artist;
  }
  get songs () {
    return this.songs;
  }
}

//Create a Book instance
const historyOfEverything = new Book ("Bill Bryson", 544, "A Short History of Nearly Everything");

/*
Call .toggleCheckOutStatus() on the historyOfEverything instance*/
historyOfEverything.toggleCheckOutStatus();

/*
Log the value saved to the isCheckedOut property in the historyOfEverything instance*/
console.log(historyOfEverything.isCheckedOut);

/* Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5*/
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

/*Call .getAverageRating() on historyOfEverything. Log the result to the console*/
console.log(historyOfEverything.getAverageRating());

/*Create a Movie instance */
const speed = new Movie ("Jan de Bont", 116, "Speed");

/*
Call .toggleCheckOutStatus() on the speed instance*/
speed.toggleCheckOutStatus();

/*Log the value saved to the isCheckedOut property in the speed instance */
console.log(speed.isCheckedOut);

/*Call .addRating() three times on speed with inputs of 1, 1, and 5 */
speed.addRating (1);
speed.addRating (1);
speed.addRating (5);

/*
Call .getAverageRating() on speed. Log the result to the console */
console.log(speed.getAverageRating());
