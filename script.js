const movieSection = document.querySelector(".movies__section");
const seriesSection = document.querySelector(".series__section");

const movieList = movieSection.querySelector(".flex");
const movieCard = movieSection.querySelectorAll(".movies__card");
const prevBtn = movieSection.querySelector(".right__navigation a:first-child");
const nextBtn = movieSection.querySelector(".right__navigation a:last-child");


const seriesList = seriesSection.querySelector(".flex");
const seriesCard = seriesSection.querySelectorAll(".movies__card");
const seriesPrevBtn = seriesSection.querySelector(".right__navigation a:first-child");
const seriesNextBtn = seriesSection.querySelector(".right__navigation a:last-child");


let currentPosition = 0;
const cardWidth = movieCard[0].offsetWidth + 16;
const seriesCardWidth = seriesCard[0].offsetWidth + 16;

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


const scrollImage = (direction) => {
    if(direction === "next" && currentPosition < seriesCard.length - 1){
        currentPosition++;
    } else if (direction === "previous" && currentPosition > 0) {
        currentPosition--;
    }

    const newPosition = -currentPosition * seriesCardWidth;
    seriesList.style.transform = `translateX(${newPosition}px)`
}

seriesNextBtn.addEventListener("click", () => {
    scrollImage("next");
})

seriesPrevBtn.addEventListener("click", () => {
    scrollImage("previous");
})