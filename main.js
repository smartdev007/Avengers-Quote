let twitterQuote = document.getElementById('twitter-quote');
let tumblrQuote = document.getElementById('tumblr-quote');
let newQuote = document.getElementById('new-quote');
let tweetBtn = document.getElementById('twitter-quote');
let tumblrBtn = document.getElementById('tumblr-quote');

let quoteBox = document.getElementById('quote-box');

function setupQuotes() {
    fetch('./quotes.json')
    .then(response => response.json())
    .then(data => {

        function getRandomQuote() {
            if (quoteBox.classList.contains('slide')) {
                quoteBox.classList.remove('slide')
            }
            
            const randomIdx = parseInt(Math.random() * data.length);
            const { quote, author, url } = data[randomIdx];
            
            tweetBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}`);
            tumblrBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}`);
        
            setTimeout(() => {
                document.getElementById('text').innerHTML = `<span class="big-quote">&#8220;</span>
                ${quote}`;
                document.getElementById('author').innerHTML = `-${author}`;
                document.body.style.background = `url('${url}') no-repeat center top/cover`;
                quoteBox.classList.add('slide');
            }, 500)
          }
        
          // preload images
          const images = data.reduce((acc, { url }) => {
                const img = new Image();
                    img.src = url;
                
                if (acc.includes(img)) {
                    return false;
                }
                
                return [...acc, img];
          }, [])
          
          newQuote.addEventListener('click', getRandomQuote);
        
          getRandomQuote();
        })
    .catch(e => console.log(e));
}

document.addEventListener('DOMContentLoaded', setupQuotes);
