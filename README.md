# NewsHub
📰 NewsHub – Real-Time News Web App

NewsHub is a responsive frontend news application that fetches real-time news using the NewsAPI and displays it in a clean, uniform, card-based UI. The app allows users to browse news by category, search for topics, and read full articles on external sources.

**🚀 Features**

🔍 Search news by keyword

🗂️ Category-based filtering (India, US, Cricket, Gaming, etc.)

🌐 Real-time data fetched using NewsAPI

🧩 Dynamic rendering using JavaScript

🖼️ Uniform card layout with consistent image sizes

📱 Responsive design with mobile-friendly layout

🔗 Read More button opens articles in a new tab

🛡️ Fallback handling for missing images or removed articles

**🛠️ Tech Stack**

HTML5 – Structure

CSS3 – Styling & responsiveness

JavaScript (ES6+) – Logic, API handling, DOM manipulation

NewsAPI – News data source

Font Awesome – Icons



**⚙️ How It Works**

User selects a category or enters a search query

JavaScript makes an API call using fetch and async/await

News articles are dynamically rendered as cards

Clicking Read More opens the full article in a new tab

**🧪 Error Handling & Data Filtering**

Articles with [Removed] titles are excluded

Non-English titles are filtered out

Placeholder images are used when article images are missing

**🧑‍💻 Setup & Usage**

Clone the repository:

git clone https://github.com/your-username/newshub.git


Open the project folder and replace the API key:

const apiKey = "YOUR_NEWS_API_KEY";


Open index.html in your browser

**📌 Future Improvements**

Pagination / infinite scroll

Dark mode

Language selection

Loading skeletons

Better error UI
