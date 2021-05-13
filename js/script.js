/*** 
 * `quotes` array 
***/
let quotes = [
  {
    "quote": "On a more serious note, the design of our org and internal systems / incentives reflects more than a little bit of influence from my formative experiences at operationally-intensive software startups and their more sophisticated established counterparts, WoW guilds.",
    "source": "Patrick McKenzie",
    "citation": "Twitter",
    "year": "2021"
  },
  {
    "quote": "Teaching yoga itself is great karma yoga, because it reconnects people to the source.",
    "source": "Amit Ray",
    "citation": "Yoga The Science of Well-Being",
  },
  {
    "quote": "Be yourself; everyone else is already taken.",
    "source": "Oscar Wilde"
  },
  {
    "quote": "Earth is the source of light.",
    "source": "Dejan Stojanovic",
    "citation": "The Sign and Its Children",
  },
  {
    "quote": "So many books, so little time.",
    "source": "Frank Zappa"
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // determining the quote position
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  
  let randomQuote = quotes[randomQuoteNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
  // retreiving the quote to show at this time
  let randomQuote = getRandomQuote()

  // showing main propeties of the quote on the console
  console.log("randomQuote quote:" + randomQuote.quote 
  + " source:" + randomQuote.source)

  //retreiving the html string to show 
  let ptoHtml = buildPtoHtml(randomQuote)

  // showing the html string on the console
  console.log("ptoHtml " + ptoHtml)

  document.getElementById('quote-box').innerHTML = ptoHtml;
}

function buildPtoHtml(randomQuote) {
  let ptoHtml = "<p class=\"quote\">" + randomQuote.quote + "</p>" +
  "<p class=\"source\">" + randomQuote.source;
  
  // in case the random quote has citation - add the citation wrapped by tags to the string generated
  if('citation' in randomQuote) {
    ptoHtml += "<span class=\"citation\">" + randomQuote.citation + "</span>";
  }
  // in case the random quote has year - add the year wrapped by tags to the string generated
  if('year' in randomQuote) {
    ptoHtml += "<span class=\"year\">" + randomQuote.year + "</span>";
  }

  ptoHtml += "</p>";  

  return ptoHtml;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);