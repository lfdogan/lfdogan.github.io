var images = [];
var dots = [];
var counter = [];
var countOfImages = [];
var currentImage = [];
var currentDot = [];
var modalFigures = [];
var modals = [];
var imagesForModal = [];
var modalsCaption = [];
var modalsImg = [];


var modalSpan = [];


    


window.onload = function () {

    var boxes = document.getElementsByClassName('carouselbox'); // an array of multiple carousels
    for (var i=0; i<boxes.length; i++){//for each carousel of the box array, set new array variables
        images.push(boxes[i].querySelectorAll('.carouselbox .content figure'));
        dots.push(boxes[i].querySelectorAll('.carouselbox .dots div'));
        counter.push(0);
        countOfImages.push(images[i].length);
        currentImage.push(images[i][0]);
        currentDot.push(dots[i][0]);
    };
    

    //box.classList.add('current');

    function navigate(carousel, direction) {
        currentImage[carousel].classList.remove('current');
        currentDot[carousel].classList.remove('current');
        counter[carousel] = counter[carousel] + direction;
        if (direction === -1 && counter[carousel] < 0) { 
          counter[carousel] = countOfImages[carousel] - 1; 
        }
        if (direction === 1 && !images[carousel][counter[carousel]]) { 
          counter[carousel] = 0;
        }
        currentImage[carousel] = images[carousel][counter[carousel]];
        currentDot[carousel] = dots[carousel][counter[carousel]];
        currentImage[carousel].classList.add('current');
        currentDot[carousel].classList.add('current');
      }

    //On page load set all carousel boxes to disply the first (index=0) image
    for (var i=0; i<boxes.length; i++){
        navigate(i, 0);
    };

    
    var next = document.getElementsByClassName('carousel-next');
    next[0].addEventListener('click', function(ev) {
        navigate(0, 1);
    });
    if (next[1]){
        next[1].addEventListener('click', function(ev) {
            navigate(1, 1);
        });
    };
    if (next[2]){
        next[2].addEventListener('click', function(ev) {
            navigate(2, 1);
        });
    };
    if (next[3]){
        next[3].addEventListener('click', function(ev) {
            navigate(3, 1);
        });
    };
    if (next[4]){
        next[4].addEventListener('click', function(ev) {
            navigate(4, 1);
        });
    };                          
    if (next[5]){
        next[5].addEventListener('click', function(ev) {
            navigate(5, 1);
        });
    };
    if (next[6]){
        next[6].addEventListener('click', function(ev) {
            navigate(6, 1);
        });
    };
    
    
    var prev = document.getElementsByClassName('carousel-prev');
    prev[0].addEventListener('click', function(ev) {
        navigate(0,-1);
    });
    if (prev[1]){
        prev[1].addEventListener('click', function(ev) {
            navigate(1, -1);
        });
    };
    if (prev[2]){
        prev[2].addEventListener('click', function(ev) {
            navigate(2, -1);
        });
    };
    if (prev[3]){
        prev[3].addEventListener('click', function(ev) {
            navigate(3, -1);
        });
    };
    if (prev[4]){
        prev[4].addEventListener('click', function(ev) {
            navigate(4, -1);
        });
    };
    if (prev[5]){
        prev[5].addEventListener('click', function(ev) {
            navigate(5, -1);
        });
    };
    if (prev[6]){
        prev[6].addEventListener('click', function(ev) {
            navigate(6, -1);
        });
    };

    
    /* IMAGE MODAL
     * http://www.w3schools.com/howto/howto_css_modal_images.asp
     * Get the image and insert it inside the modal - use its "alt" text as a caption.
     * Get the <span> element that closes the modal.
     * When the user clicks on <span> (x), close the modal
     */


    modalFigures = document.getElementsByClassName('modal-figure');
    imagesForModal = document.getElementsByClassName('image-for-modal');    
    modals = document.getElementsByClassName('modal');
    modalsCaption = document.getElementsByClassName("modal-caption");
    modalsImg = document.getElementsByClassName('modal-img');
    
    modalsSpan = document.getElementsByClassName('modalSpan');


};



var openModal = function(index) {
    modals[index].style.display = "block";
    modalsImg[index].alt = modalFigures[index].getElementsByTagName('figcaption')[0].innerHTML;
    modalsImg[index].src = imagesForModal[index].src;
    modalsCaption[index].innerHTML = modalFigures[index].getElementsByTagName('figcaption')[0].innerHTML;
};
var closeModal = function(index) {
    modals[index].style.display = "none";
};

var openModalSpanInline = function(index){
    modalsSpan[index].style.display = "block";
};
var closeModalSpanInline = function(index){
    modalsSpan[index].style.display = "none";
};