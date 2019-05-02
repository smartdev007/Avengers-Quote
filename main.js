let twitterQuote = document.getElementById('twitter-quote');
let tumblrQuote = document.getElementById('tumblr-quote');
let newQuote = document.getElementById('new-quote');
let tweetBtn = document.getElementById('twitter-quote');

let quoteBox = document.getElementById('quote-box');

newQuote.addEventListener('click', getRandomQuote);
tweetBtn.addEventListener('click', tweetQuote);

function getRandomQuote() {
    fetch('./quotes.json')
    .then(response => response.json())
    .then(data => {

        if(quoteBox.classList.contains('slide')){
            quoteBox.classList.remove('slide');
        }

        let randomInt = parseInt(Math.random() * data.length);

        let quote = data[randomInt].quote;
        let author = data[randomInt].author;
        let img = data[randomInt].url;
        
        document.getElementById('text').innerHTML = `<span class="big-quote">&#8220;</span>
        ${quote}`;
        document.getElementById('author').innerHTML = `-${author}`;

        document.body.style.background = `url('${img}') no-repeat center top/cover`;

        setTimeout(() => quoteBox.classList.add('slide'), 200);
    })
    .catch(e => console.log(e));
}

function tweetQuote() {
    let tweetText = document.getElementById('text').innerText;
    tweetBtn.setAttribute("href", 'https://twitter.com/intent/tweet?text=' + tweetText);
}

document.addEventListener('DOMContentLoaded', getRandomQuote);