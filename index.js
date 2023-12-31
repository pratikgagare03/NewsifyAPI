console.log("This is my index js file");

// Initialize the news api parameters
let source = 'abc-news';
let apiKey = '5a56e923552549e08d89f53f00d3023a'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=5a56e923552549e08d89f53f00d3023a', true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `<div class="section">
                            <h4> ${element["title"]}</h4>
                            <p>${element["content"]}</p>
                            <p><a href="${element['url']}" target="_blank" >Read more here</a> </p>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();


