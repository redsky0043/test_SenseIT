const btnApplication = document.querySelector('.btn--application');
const btnJury = document.querySelector('.btn--jury');
const allPixels = document.querySelectorAll('.main__pixel');

const sliderSecond = document.querySelector('.slider-second');
const sliderThird = document.querySelector('.slider-third');


btnApplication.addEventListener('mouseover', () => {
    sliderSecond.style.opacity = 1;
    allPixels[0].classList.add('first_pixel');
    allPixels[1].classList.add('second_pixel');
});

btnApplication.addEventListener('mouseout', () => {
    sliderSecond.style.opacity = 0;
    allPixels[0].classList.remove('first_pixel');
    allPixels[1].classList.remove('second_pixel');
});

btnJury.addEventListener('mouseover', () => {
    sliderThird.style.opacity = 1;
});

btnJury.addEventListener('mouseout', () => {
    sliderThird.style.opacity = 0;
});


console.log(allPixels);