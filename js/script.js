/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

// Array of quote objects
const quotes = [
  {
    quote: "Life is a long lesson in humility.",
    source: "James M. Barrie",
    tags: "Motivation",
  },
  {
    quote: "I don't wanna wait in vain for your love",
    source: "Bob Marley",
    album: "Legend",
    date: "1984",
    tags: "Music",
  },
  {
    quote:
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    source: "Barack Obama",
    tags: "Motivation",
  },
  {
    quote:
      "The starting point of all achievement is DESIRE. Keep this constantly in mind. Weak desire brings weak results, just as a small fire makes a small amount of heat.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: "1937",
    tags: "Self Help, Success",
  },
  {
    quote: "Control the options: Get others to play with the cards you deal.",
    source: "Robert Greene",
    citation: "The 48 Laws of Power",
    year: "1998",
    tags: "Success",
  },

  {
    quote:
      "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.",
    source: "Arthur C. Clarke",
    tags: "Humor",
  },
  {
    quote: "My opinions may have changed, but not the fact that I’m right.",
    source: "Ashleigh Brilliant",
    tags: "Humor",
  },
  {
    quote:
      "Inside me there’s a thin person struggling to get out, but I can usually sedate him with four or five cupcakes.",
    source: "Bob Thaves",
    tags: "Humor",
  },
  {
    quote: "Use the Surrender Tactic: transform weakness into power.",
    source: "Robert Greene",
    citation: "The 48 Laws of Power",
    year: "1998",
    tags: "Success",
  },
  {
    quote:
      "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: "1937",
    tags: "Self Help, Success",
  },
];

/***
 * Get a random number
 * @param number
 * @returns - number
 ***/

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

/***
 * Generates a random index for an array and returns an object 'Quote'
 * @param array
 * @returns object
 ***/
const getRandomQuote = (arr) => {
  const index = randomNum(arr.length);
  return arr[index];
};

/***
 * Generates a random RGB value
 *
 *
 ***/
const generateRgb = () => {
  return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
};

/***
 * Generates and displays HTML to page and changes background-color
 ***/

const printQuote = () => {
  // Variables
  let quote = getRandomQuote(quotes);
  let msg = `<p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`;
  let body = document.querySelector("body");
  let color = generateRgb();
  if (quote.citation) {
    msg += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    msg += `<span class="year"> ${quote.year}  </span>`;
  }

  if (quote.album) {
    msg += `<span class="citation"> ${quote.album}  </span>`;
  }

  msg += `</p> <p ><span class="tags">${quote.tags}</span></p>`;

  // Adds HTML To quote-box
  document.getElementById("quote-box").innerHTML = msg;

  // Changes body's background-color
  body.style.backgroundColor = color;
};

//changes quotes and background color every six seconds
window.setInterval(() => {
  printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
