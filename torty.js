const sliderLine1 = document.querySelector('.cupcakes-slider-line');
let offset1 = 0;
const next1 = document.querySelector('.cupcakes-next');
const prev1 = document.querySelector('.cupcakes-prev');

document.querySelector('.cupcakes-next').addEventListener('click', function(){
    offset1 = offset1 + 358 ;

    if (offset1 > 1074){
        offset1 = 0
    }    
    
    sliderLine1.style.left = -offset1 + 'px';
});


document.querySelector('.cupcakes-prev').addEventListener('click', function(){
    offset1 = offset1 - 358 ;

    if (offset1 < 0){
        offset1 = 1074
    }    
    
    sliderLine1.style.left = -offset1 + 'px';
});