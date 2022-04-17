window.addEventListener("load", () => {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#news-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const term = input.value;
    console.log(term);
    fetchData(
      `https://newsapi.org/v2/everything?q=${term}&apiKey=1e0c3c9c8adc4aa9a6c5322e7a576f17`
    );
  });

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
});
