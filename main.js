let NEWS_API_KEY;

// window.addEventListener("load", () => {
const form = document.querySelector("#search-form");
const input = document.querySelector("#news-input");
const articles = document.getElementById("articles");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const term = input.value;
  const URL = `https://newsapi.org/v2/everything?q=${term}&apiKey=${NEWS_API_KEY}`;
  const newsList = await fetchNews(URL);
  const div = displayNews(newsList);
  articles.appendChild(div);
});

function displayNews(news) {
  const divNews = document.createElement("div");
  divNews.classList.add("news-container");
  news.forEach((article) => {
    const div = document.createElement("div");
    div.classList.add("news-item");
    const newsText = document.createElement("div");
    newsText.classList.add("news-text");
    const title = document.createElement("h2");
    title.textContent = article.title;
    newsText.appendChild(title);
    const desc = document.createElement("p");
    desc.textContent = article.description;
    newsText.appendChild(desc);
    const auth = document.createElement("p");
    auth.textContent = article.author;
    newsText.appendChild(auth);
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = "article related img";
    img.classList.add("article-img");
    div.appendChild(newsText);
    div.appendChild(img);
    divNews.appendChild(div);
  });
  return divNews;
}

async function fetchNews(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    const data = await json.articles;
    console.log(data);
    return data;
    //return data;
  } catch (error) {
    console.log(error);
  }
}
// });
