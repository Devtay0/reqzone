const movieSection = document.querySelector(".movies__section");
const movieList = movieSection.querySelector(".flex");
const movieCard = movieSection.querySelectorAll(".movies__card");
const prevBtn = movieSection.querySelector(".right__navigation a:first-child");
const nextBtn = movieSection.querySelector(".right__navigation a:last-child");


let currentPosition = 0;
const cardWidth = movieCard[0].offsetWidth + 16;

const navigateImage = (direction) => {
    if(direction === "next" && currentPosition < movieCard.length - 1){
        currentPosition++;
    } else if (direction === "previous" && currentPosition > 0) {
        currentPosition--;
    }

    const newPosition = -currentPosition * cardWidth;
    movieList.style.transform = `translateX(${newPosition}px)`


}

nextBtn.addEventListener("click", () => {
    navigateImage("next");
})

prevBtn.addEventListener("click", () => {
    navigateImage("previous");
})