const sliderLine1 = document.querySelector('.slider1-line');
let offset1 = 0;
const next1 = document.querySelector('.slider1-next');
const prev1 = document.querySelector('.slider1-prev');
const dot1_1 = document.querySelector('.slider1-dot1');
const dot1_2 = document.querySelector('.slider1-dot2');
const dot1_3 = document.querySelector('.slider1-dot3');
const dot1_4 = document.querySelector('.slider1-dot4');

/*SLIDER1*______________________________________________________________*/

document.querySelector('.slider1-next').addEventListener('click', function(){
    offset1 = offset1 + 403 ;

    if (offset1 > 806){
        next1.classList.add('none')
    } else if(offset1 < 1209) {
        next1.classList.remove('none')
    }

    if (offset1 < 403){
        prev1.classList.add('none')
    } else if (offset1 >= 403) {
        prev1.classList.remove('none')
    }
    







    if (offset1 == 0){
        dot1_1.classList.add('active')
    } else {
        dot1_1.classList.remove('active')
    }

    if (offset1 == 403){
        dot1_2.classList.add('active')
    } else {
        dot1_2.classList.remove('active')
    }

    if (offset1 == 806){
        dot1_3.classList.add('active')
    } else {
        dot1_3.classList.remove('active')
    }

    if (offset1 == 1209){
        dot1_4.classList.add('active')
    } else {
        dot1_4.classList.remove('active')
    }

    sliderLine1.style.left = -offset1 + 'px';
});




document.querySelector('.slider1-prev').addEventListener('click', function(){
    offset1 = offset1 - 403 ;

    if (offset1 > 806){
        next1.classList.add('none')
    } else if(offset1 < 1209) {
        next1.classList.remove('none')
    }

    if (offset1 < 403){
        prev1.classList.add('none')
    } else if (offset1 >= 403) {
        prev1.classList.remove('none')
    }







    if (offset1 == 0){
        dot1_1.classList.add('active')
    } else{
        dot1_1.classList.remove('active')
    }

    if (offset1 == 403){
        dot1_2.classList.add('active')
    } else {
        dot1_2.classList.remove('active')
    }

    if (offset1 == 806){
        dot1_3.classList.add('active')
    } else {
        dot1_3.classList.remove('active')
    }

    if (offset1 == 1209){
        dot1_4.classList.add('active')
    } else {
        dot1_4.classList.remove('active')
    }

    sliderLine1.style.left = -offset1 + 'px';
});


dot1_1.addEventListener('click', function(){
    offset1 = 0
    sliderLine1.style.left = -offset1 + 'px';

    this.classList.add('active')
    dot1_2.classList.remove('active')
    dot1_3.classList.remove('active')
    dot1_4.classList.remove('active')

    prev1.classList.add('none')
    next1.classList.remove('none')
});

dot1_2.addEventListener('click', function(){
    offset1 = 403
    sliderLine1.style.left = -offset1 + 'px';

    this.classList.add('active')
    dot1_1.classList.remove('active')
    dot1_3.classList.remove('active')
    dot1_4.classList.remove('active')

    prev1.classList.remove('none')
    next1.classList.remove('none')
});

dot1_3.addEventListener('click', function(){
    offset1 = 806
    sliderLine1.style.left = -offset1 + 'px';

    this.classList.add('active')
    dot1_2.classList.remove('active')
    dot1_1.classList.remove('active')
    dot1_4.classList.remove('active')

    prev1.classList.remove('none')
    next1.classList.remove('none')
});

dot1_4.addEventListener('click', function(){
    offset1 = 1209
    sliderLine1.style.left = -offset1 + 'px';

    this.classList.add('active')
    dot1_2.classList.remove('active')
    dot1_3.classList.remove('active')
    dot1_1.classList.remove('active')

    next1.classList.add('none')
    prev1.classList.remove('none')
});

/*SLIDER2*______________________________________________________________*/

const sliderLine2 = document.querySelector('.slider2-line');
let offset2 = 0;
const next2 = document.querySelector('.slider2-next');
const prev2 = document.querySelector('.slider2-prev');
const dot2_1 = document.querySelector('.slider2-dot1');
const dot2_2 = document.querySelector('.slider2-dot2');
const dot2_3 = document.querySelector('.slider2-dot3');
const dot2_4 = document.querySelector('.slider2-dot4');



document.querySelector('.slider2-next').addEventListener('click', function(){
    offset2 = offset2 + 403 ;

    if (offset2 > 806){
        next2.classList.add('none')
    } else if(offset2 < 1209) {
        next2.classList.remove('none')
    }

    if (offset2 < 403){
        prev2.classList.add('none')
    } else if (offset2 >= 403) {
        prev2.classList.remove('none')
    }
    







    if (offset2 == 0){
        dot2_1.classList.add('active')
    } else {
        dot2_1.classList.remove('active')
    }

    if (offset2 == 403){
        dot2_2.classList.add('active')
    } else {
        dot2_2.classList.remove('active')
    }

    if (offset2 == 806){
        dot2_3.classList.add('active')
    } else {
        dot2_3.classList.remove('active')
    }

    if (offset2 == 1209){
        dot2_4.classList.add('active')
    } else {
        dot2_4.classList.remove('active')
    }

    sliderLine2.style.left = -offset2 + 'px';
});




document.querySelector('.slider2-prev').addEventListener('click', function(){
    offset2 = offset2 - 403 ;

    if (offset2 > 806){
        next2.classList.add('none')
    } else if(offset2 < 1209) {
        next2.classList.remove('none')
    }

    if (offset2 < 403){
        prev2.classList.add('none')
    } else if (offset2 >= 403) {
        prev2.classList.remove('none')
    }







    if (offset2 == 0){
        dot2_1.classList.add('active')
    } else{
        dot2_1.classList.remove('active')
    }

    if (offset2 == 403){
        dot2_2.classList.add('active')
    } else {
        dot2_2.classList.remove('active')
    }

    if (offset2 == 806){
        dot2_3.classList.add('active')
    } else {
        dot2_3.classList.remove('active')
    }

    if (offset2 == 1209){
        dot2_4.classList.add('active')
    } else {
        dot2_4.classList.remove('active')
    }

    sliderLine2.style.left = -offset2 + 'px';
});


dot2_1.addEventListener('click', function(){
    offset2 = 0
    sliderLine2.style.left = -offset2 + 'px';

    this.classList.add('active')
    dot2_2.classList.remove('active')
    dot2_3.classList.remove('active')
    dot2_4.classList.remove('active')

    prev2.classList.add('none')
    next2.classList.remove('none')
});

dot2_2.addEventListener('click', function(){
    offset2 = 403
    sliderLine2.style.left = -offset2 + 'px';

    this.classList.add('active')
    dot2_1.classList.remove('active')
    dot2_3.classList.remove('active')
    dot2_4.classList.remove('active')

    prev2.classList.remove('none')
    next2.classList.remove('none')
});

dot2_3.addEventListener('click', function(){
    offset2 = 806
    sliderLine2.style.left = -offset2 + 'px';

    this.classList.add('active')
    dot2_2.classList.remove('active')
    dot2_1.classList.remove('active')
    dot2_4.classList.remove('active')

    prev2.classList.remove('none')
    next2.classList.remove('none')
});

dot2_4.addEventListener('click', function(){
    offset2 = 1209
    sliderLine2.style.left = -offset2 + 'px';

    this.classList.add('active')
    dot2_2.classList.remove('active')
    dot2_3.classList.remove('active')
    dot2_1.classList.remove('active')

    next2.classList.add('none')
    prev2.classList.remove('none')
});








/*SLIDER3*______________________________________________________________*/

const sliderLine3 = document.querySelector('.slider3-line');
let offset3 = 0;
const next3 = document.querySelector('.slider3-next');
const prev3 = document.querySelector('.slider3-prev');
const dot3_1 = document.querySelector('.slider3-dot1');
const dot3_2 = document.querySelector('.slider3-dot2');
const dot3_3 = document.querySelector('.slider3-dot3');
const dot3_4 = document.querySelector('.slider3-dot4');



document.querySelector('.slider3-next').addEventListener('click', function(){
    offset3 = offset3 + 403 ;

    if (offset3 > 806){
        next3.classList.add('none')
    } else if(offset3 < 1209) {
        next3.classList.remove('none')
    }

    if (offset3 < 403){
        prev3.classList.add('none')
    } else if (offset3 >= 403) {
        prev3.classList.remove('none')
    }
    







    if (offset3 == 0){
        dot3_1.classList.add('active')
    } else {
        dot3_1.classList.remove('active')
    }

    if (offset3 == 403){
        dot3_2.classList.add('active')
    } else {
        dot3_2.classList.remove('active')
    }

    if (offset3 == 806){
        dot3_3.classList.add('active')
    } else {
        dot3_3.classList.remove('active')
    }

    if (offset3 == 1209){
        dot3_4.classList.add('active')
    } else {
        dot3_4.classList.remove('active')
    }

    sliderLine3.style.left = -offset3 + 'px';
});




document.querySelector('.slider3-prev').addEventListener('click', function(){
    offset3 = offset3 - 403 ;

    if (offset3 > 806){
        next3.classList.add('none')
    } else if(offset3 < 1209) {
        next3.classList.remove('none')
    }

    if (offset3 < 403){
        prev3.classList.add('none')
    } else if (offset3 >= 403) {
        prev3.classList.remove('none')
    }







    if (offset3 == 0){
        dot3_1.classList.add('active')
    } else{
        dot3_1.classList.remove('active')
    }

    if (offset3 == 403){
        dot3_2.classList.add('active')
    } else {
        dot3_2.classList.remove('active')
    }

    if (offset3 == 806){
        dot3_3.classList.add('active')
    } else {
        dot3_3.classList.remove('active')
    }

    if (offset3 == 1209){
        dot3_4.classList.add('active')
    } else {
        dot3_4.classList.remove('active')
    }

    sliderLine3.style.left = -offset3 + 'px';
});


dot3_1.addEventListener('click', function(){
    offset3 = 0
    sliderLine3.style.left = -offset3 + 'px';

    this.classList.add('active')
    dot3_2.classList.remove('active')
    dot3_3.classList.remove('active')
    dot3_4.classList.remove('active')

    prev3.classList.add('none')
    next3.classList.remove('none')
});

dot3_2.addEventListener('click', function(){
    offset3 = 403
    sliderLine3.style.left = -offset3 + 'px';

    this.classList.add('active')
    dot3_1.classList.remove('active')
    dot3_3.classList.remove('active')
    dot3_4.classList.remove('active')

    prev3.classList.remove('none')
    next3.classList.remove('none')
});

dot3_3.addEventListener('click', function(){
    offset3 = 806
    sliderLine3.style.left = -offset3 + 'px';

    this.classList.add('active')
    dot3_2.classList.remove('active')
    dot3_1.classList.remove('active')
    dot3_4.classList.remove('active')

    prev3.classList.remove('none')
    next3.classList.remove('none')
});

dot3_4.addEventListener('click', function(){
    offset3 = 1209
    sliderLine3.style.left = -offset3 + 'px';

    this.classList.add('active')
    dot3_2.classList.remove('active')
    dot3_3.classList.remove('active')
    dot3_1.classList.remove('active')

    next3.classList.add('none')
    prev3.classList.remove('none')
});







/*SLIDER4*______________________________________________________________*/

const sliderLine4 = document.querySelector('.slider4-line');
let offset4 = 0;
const next4 = document.querySelector('.slider4-next');
const prev4 = document.querySelector('.slider4-prev');
const dot4_1 = document.querySelector('.slider4-dot1');
const dot4_2 = document.querySelector('.slider4-dot2');
const dot4_3 = document.querySelector('.slider4-dot3');
const dot4_4 = document.querySelector('.slider4-dot4');
const dot4_5 = document.querySelector('.slider4-dot5');



document.querySelector('.slider4-next').addEventListener('click', function(){
    offset4 = offset4 + 403 ;

    if (offset4 > 1209){
        next4.classList.add('none')
    } else if(offset4 < 1209) {
        next4.classList.remove('none')
    }

    if (offset4 < 403){
        prev4.classList.add('none')
    } else if (offset4 >= 403) {
        prev4.classList.remove('none')
    }
    







    if (offset4 == 0){
        dot4_1.classList.add('active')
    } else {
        dot4_1.classList.remove('active')
    }

    if (offset4 == 403){
        dot4_2.classList.add('active')
    } else {
        dot4_2.classList.remove('active')
    }

    if (offset4 == 806){
        dot4_3.classList.add('active')
    } else {
        dot4_3.classList.remove('active')
    }

    if (offset4 == 1209){
        dot4_4.classList.add('active')
    } else {
        dot4_4.classList.remove('active')
    }

    if (offset4 == 1612){
        dot4_5.classList.add('active')
    } else {
        dot4_5.classList.remove('active')
    }

    sliderLine4.style.left = -offset4 + 'px';
});




document.querySelector('.slider4-prev').addEventListener('click', function(){
    offset4 = offset4 - 403 ;

    if (offset4 > 1209){
        next4.classList.add('none')
    } else if(offset4 <= 1209) {
        next4.classList.remove('none')
    }

    if (offset4 < 403){
        prev4.classList.add('none')
    } else if (offset4 >= 403) {
        prev4.classList.remove('none')
    }







    if (offset4 == 0){
        dot4_1.classList.add('active')
    } else{
        dot4_1.classList.remove('active')
    }

    if (offset4 == 403){
        dot4_2.classList.add('active')
    } else {
        dot4_2.classList.remove('active')
    }

    if (offset4 == 806){
        dot4_3.classList.add('active')
    } else {
        dot4_3.classList.remove('active')
    }

    if (offset4 == 1209){
        dot4_4.classList.add('active')
    } else {
        dot4_4.classList.remove('active')
    }

    if (offset4 == 1612){
        dot4_5.classList.add('active')
    } else {
        dot4_5.classList.remove('active')
    }

    sliderLine4.style.left = -offset4 + 'px';
});


dot4_1.addEventListener('click', function(){
    offset4 = 0
    sliderLine4.style.left = -offset4 + 'px';

    this.classList.add('active')
    dot4_2.classList.remove('active')
    dot4_3.classList.remove('active')
    dot4_4.classList.remove('active')
    dot4_5.classList.remove('active')

    prev4.classList.add('none')
    next4.classList.remove('none')
});

dot4_2.addEventListener('click', function(){
    offset4 = 403
    sliderLine4.style.left = -offset4 + 'px';

    this.classList.add('active')
    dot4_1.classList.remove('active')
    dot4_3.classList.remove('active')
    dot4_4.classList.remove('active')
    dot4_5.classList.remove('active')

    prev4.classList.remove('none')
    next4.classList.remove('none')
});

dot4_3.addEventListener('click', function(){
    offset4 = 806
    sliderLine4.style.left = -offset4 + 'px';

    this.classList.add('active')
    dot4_2.classList.remove('active')
    dot4_1.classList.remove('active')
    dot4_4.classList.remove('active')
    dot4_5.classList.remove('active')

    prev4.classList.remove('none')
    next4.classList.remove('none')
});

dot4_4.addEventListener('click', function(){
    offset4 = 1209
    sliderLine4.style.left = -offset4 + 'px';

    this.classList.add('active')
    dot4_2.classList.remove('active')
    dot4_3.classList.remove('active')
    dot4_1.classList.remove('active')
    dot4_5.classList.remove('active')

    prev4.classList.remove('none')
    next4.classList.remove('none')
});

dot4_5.addEventListener('click', function(){
    offset4 = 1612
    sliderLine4.style.left = -offset4 + 'px';

    this.classList.add('active')
    dot4_2.classList.remove('active')
    dot4_1.classList.remove('active')
    dot4_4.classList.remove('active')
    dot4_3.classList.remove('active')

    next4.classList.add('none')
    prev4.classList.remove('none')
});