const slides = document.querySelectorAll(".carousel-item");
let  slidePosition = 0;
const totalSlides = slides.length;
const previous = document.getElementById("prev");
const Next = document.getElementById("next");

Next.addEventListener("click" , moveToNextSlide)
previous.addEventListener("click" , moveToPreviousSlide);

function hideAllSlides(){
    for( let slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide(){
    hideAllSlides();
    if(slidePosition === totalSlides-1){
        slidePosition = 0;
    } 
    else{
        slidePosition++;

    }
   slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPreviousSlide(){
    hideAllSlides();
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    }
    else{
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

// console.log(totalSlides);