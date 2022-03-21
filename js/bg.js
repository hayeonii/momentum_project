const images = [
	"0.jpeg",
	"1.jpeg",
	"2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/bg/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.background = `url(img/bg/${chosenImage}) no-repeat center top / 100%`;
// document.body.style.backgroundSize = "auto";
// document.body.style.backgroundAttachment = "fixed";