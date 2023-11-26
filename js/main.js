const animatedCaption = document.querySelector('.animated-caption');
const captions = document.querySelectorAll('.caption');

let index = 0;
animatedCaption.addEventListener('animationiteration', ()=>{
    
    captions[index].classList.remove('d-block');
    captions[index++].classList.add('d-none');

    if (index == 3) {index = 0}
    captions[index].classList.remove('d-none');
    captions[index].classList.add('d-block');
});