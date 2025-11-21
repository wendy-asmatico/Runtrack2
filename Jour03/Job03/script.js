const image1 = document.getElementById("item1");
const image2 = document.getElementById("item2");
const image3 = document.getElementById("item3");
const image4 = document.getElementById("item4");
const image5 = document.getElementById("item5");
const image6 = document.getElementById("item6");
const image7= document.getElementById("item7");
const image8 = document.getElementById("item8");


const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const button = document.getElementById("melanger");

// Mélange
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

