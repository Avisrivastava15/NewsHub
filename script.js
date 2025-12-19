async function newsdata(query) {
    try {
        const response = await fetch(
            "https://newsapi.org/v2/everything?q=" + query + "&apiKey=ef0606b12941457f91b1d83f1829e9ec"
        );
        const b = await response.json();
        console.log(b);
        let data = "";

        b.articles.forEach(news => {
    if (news.title && /^[A-Za-z0-9\s.,'"!?()-]+$/.test(news.title)) {
        const imageUrl = news.urlToImage ? news.urlToImage : "placeholder.png"; // fallback image
        data += `<div class="card">
            <img src="${imageUrl}" alt="Card image">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.description || "Click on Read More to get the full news."}</p>
                <p class="card-text"><small class="text-secondary"><a href="${news.url}" class="link" target="_blank">Read More</a></small></p>
            </div>
        </div>`;
    }
});


        document.getElementById("demo").innerHTML = data;

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

newsdata("top");

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    navbar.classList.add("hide");
  } else {
    // scrolling up
    navbar.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

