const slider = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-container img');

let currentIndex = 0;
const totalImages = images.length;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages){
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); 