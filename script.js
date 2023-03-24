const currentImage = document.getElementById("imgOne");
const playerName = document.getElementById("playerName"); 
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const thumbnailContainer = document.getElementById('thumbnailContainer'); 

let counter = 0;

const images = [
    "./images/shai.jpg",
    "./images/murray.jpg",
    "./images/wiggins.jpg",
    "./images/mathurin.jpg",
    "./images/clarke.jpg"
];

const names = [
    "Shai Gilgeous-Alexander",
    "Jamal Murray",
    "Andrew Wiggins",
    "Benedict Mathurin",
    "Brandon Clarke"
];

for (let i =0; i < images.length; i++) {
    const playerText = names[i];
    const thumb = document.createElement('img');
    thumb.src = images[i];
    thumb.classList.add('thumbnail-img');
    thumb.addEventListener("click", () => {
        currentImage.src = thumb.src;
        playerName.innerHTML = playerText;
        counter = [i];
    });
    thumbnailContainer.appendChild(thumb);
}

nextBtn.addEventListener("click", () => {
    if (counter >= images.length - 1) {
        return (currentImage.src = images[images.length - 1]);
    } else {
        counter++;
        currentImage.src = images[counter];
        playerName.innerHTML = names[counter];
    }    
});

prevBtn.addEventListener("click", () => {
    if(counter <= 0) {
        return (currentImage.src = images[0]);
    } else {
        counter--;
        currentImage.src = images[counter];
        playerName.innerHTML = names[counter];
    }
}); 
