const quotes = [
{
name: 'Walt Disney',
quote: 'Whatever you do, do it well.' 
},
{
name: 'Pablo Picasso',
quote: 'Everything you can imagine is real.'
},
{
name: 'Robert H. Schiuller',
quote: 'Tough times never last but tough people do.'
},
{
name: 'Nike',
quote: 'Yesterday you said tomorrow. Just do it.'
},
{
name: 'Nelson Mandela',
quote: 'May your choices reflect your hopes, not your fears.'
},

]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let randomQuote = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[randomQuote].quote;
    quoteAuthor.innerHTML = quotes[randomQuote].name;
    
}
