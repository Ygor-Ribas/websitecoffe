const images = 
[
    "images/image_1.jpg",
    "images/image_2.jpg",
    "images/image_3.jpg"
]

const imageElement = document.getElementById("image");
const buttonElement = document.getElementById("button");

let currentIndex = 0;

buttonElement.addEventListener("click", function()
{
    currentIndex++;
    if(currentIndex >= images.length)
    {
        currentIndex = 0;
    }
    imageElement.src = images[currentIndex];
})