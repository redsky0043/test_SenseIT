const allMainPixels = document.querySelectorAll('.main__pixel');
const allBottomPixels = document.querySelectorAll('.bottom__pixel');

btnApplication.addEventListener('mouseover', () => {
    allMainPixels[0].classList.add('first_pixel');
    allMainPixels[1].classList.add('second_pixel');
    allMainPixels[2].classList.add('third_pixel');
    allMainPixels[3].classList.add('fourth_pixel');
    allMainPixels[4].classList.add('fifth_pixel');
    allMainPixels[5].classList.add('sixth_pixel');
    allMainPixels[6].classList.add('seventh_pixel');
    allMainPixels[7].classList.add('eighth_pixel');
    allMainPixels[9].classList.add('nineth_pixel');
    allMainPixels[10].classList.add('tenth_pixel');

    allBottomPixels[0].classList.add('twelfth_pixel');
    allBottomPixels[1].classList.add('thirteenth_pixel');
    allBottomPixels[2].classList.add('fourteenth_pixel');
    allBottomPixels[3].classList.add('fifteenth_pixel');
    allBottomPixels[4].classList.add('sixteenth_pixel');
    allBottomPixels[6].classList.add('eighteenth_pixel');
});

btnApplication.addEventListener('mouseout', () => {
    allMainPixels[0].classList.remove('first_pixel');
    allMainPixels[1].classList.remove('second_pixel');
    allMainPixels[2].classList.remove('third_pixel');
    allMainPixels[3].classList.remove('fourth_pixel');
    allMainPixels[4].classList.remove('fifth_pixel');
    allMainPixels[5].classList.remove('sixth_pixel');
    allMainPixels[6].classList.remove('seventh_pixel');
    allMainPixels[7].classList.remove('eighth_pixel');
    allMainPixels[9].classList.remove('nineth_pixel');
    allMainPixels[10].classList.remove('tenth_pixel');

    allBottomPixels[0].classList.remove('twelfth_pixel');
    allBottomPixels[1].classList.remove('thirteenth_pixel');
    allBottomPixels[2].classList.remove('fourteenth_pixel');
    allBottomPixels[3].classList.remove('fifteenth_pixel');
    allBottomPixels[4].classList.remove('sixteenth_pixel');
    allBottomPixels[6].classList.remove('eighteenth_pixel');
});

btnJury.addEventListener('mouseover', () => {
    allMainPixels[0].classList.add('first_pixel_2');
    allMainPixels[1].classList.add('second_pixel_2');
    allMainPixels[2].classList.add('third_pixel_2');
    allMainPixels[3].classList.add('fourth_pixel_2');
    allMainPixels[4].classList.add('fifth_pixel_2');
    allMainPixels[5].classList.add('sixth_pixel_2');
    allMainPixels[6].classList.add('seventh_pixel_2');
    allMainPixels[7].classList.add('eighth_pixel_2');
    allMainPixels[8].classList.add('nineth_pixel_2');
    allMainPixels[9].classList.add('tenth_pixel_2');
    allMainPixels[10].classList.add('eleventh_pixel_2');

    allBottomPixels[0].classList.add('twelfth_pixel_2');
    allBottomPixels[1].classList.add('thirteenth_pixel_2');
    allBottomPixels[2].classList.add('fourteenth_pixel_2');
    allBottomPixels[3].classList.add('fifteenth_pixel_2');
    allBottomPixels[4].classList.add('sixteenth_pixel_2');
    allBottomPixels[6].classList.add('eighteenth_pixel_2');
});

btnJury.addEventListener('mouseout', () => {
    allMainPixels[0].classList.remove('first_pixel_2');
    allMainPixels[1].classList.remove('second_pixel_2');
    allMainPixels[2].classList.remove('third_pixel_2');
    allMainPixels[3].classList.remove('fourth_pixel_2');
    allMainPixels[4].classList.remove('fifth_pixel_2');
    allMainPixels[5].classList.remove('sixth_pixel_2');
    allMainPixels[6].classList.remove('seventh_pixel_2');
    allMainPixels[7].classList.remove('eighth_pixel_2');
    allMainPixels[8].classList.remove('nineth_pixel_2');
    allMainPixels[9].classList.remove('tenth_pixel_2');
    allMainPixels[10].classList.remove('eleventh_pixel_2');

    allBottomPixels[0].classList.remove('twelfth_pixel_2');
    allBottomPixels[1].classList.remove('thirteenth_pixel_2');
    allBottomPixels[2].classList.remove('fourteenth_pixel_2');
    allBottomPixels[3].classList.remove('fifteenth_pixel_2');
    allBottomPixels[4].classList.remove('sixteenth_pixel_2');
    allBottomPixels[6].classList.remove('eighteenth_pixel_2');
});
