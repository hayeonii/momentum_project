const books = [
    "0.jpeg",
	"1.jpeg",
	"2.jpeg",
    "3.jpeg",
    "4.jpeg"
]

const bestImg = document.querySelector(".best-seller");
const bookImg = books[Math.floor(Math.random() * books.length)];

bestImg.innerHTML = `<img id="book-img" src="./img/book/${bookImg}" width="150px" height="217px";>`;