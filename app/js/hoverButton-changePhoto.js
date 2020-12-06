const btnApplication = document.querySelector('.btn--application');
const btnJury = document.querySelector('.btn--jury');

const sliderSecond = document.querySelector('.slider-second');
const sliderThird = document.querySelector('.slider-third');


btnApplication.addEventListener('mouseover', () => {
    sliderSecond.style.opacity = 1;
});

btnApplication.addEventListener('mouseout', () => {
    sliderSecond.style.opacity = 0;
});

btnJury.addEventListener('mouseover', () => {
    sliderThird.style.opacity = 1;
});

btnJury.addEventListener('mouseout', () => {
    sliderThird.style.opacity = 0;
});