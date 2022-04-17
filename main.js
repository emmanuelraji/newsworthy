window.addEventListener("load", () => {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#news-input");
  const root = document.getElementById("root");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const term = input.value;
    const URL = `https://newsapi.org/v2/everything?q=${term}&apiKey=1e0c3c9c8adc4aa9a6c5322e7a576f17`;
    const newsList = await fetchNews(URL);
    const div = displayNews(newsList);
    root.appendChild(div);
  });

  function displayNews(news) {
    const divNews = document.createElement("div");
    divNews.classList.add("news-container");
    news.forEach((article) => {
      const div = document.createElement("div");
      div.classList.add("news-item");
      const h1 = document.createElement("h1");
      h1.textContent = article.author;
      div.appendChild(h1);
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
      return data;
      console.log(data);
      //return data;
    } catch (error) {
      console.log(error);
    }
  }
});
