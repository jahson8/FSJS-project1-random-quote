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
    citation: "Legend",
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
];

/***
 * Generates a random index for an array and returns an object 'Quote'
 * @param array
 * @returns object
 ***/

const getRandomQuote = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

/***
 * `printQuote` function
 ***/

const printQuote = () => {
  let quote = getRandomQuote(quotes);
  console.log(quote);
  let msg = `<p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`;
  if (quote.citation) {
    msg += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    msg += `<span class="year"> ${quote.year}  </span>`;
  }
  msg += `</p> <p class="tags">${quote.tags}</p>`;
  console.log(msg);
  document.getElementById("quote-box").innerHTML = msg;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
