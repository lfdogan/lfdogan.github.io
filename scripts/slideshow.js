window.onload= function(){

    var box = document.querySelector('.carouselbox');
    var items = box.querySelectorAll('.content figure');
    var dots = box.querySelectorAll('.carouselbox .dots div');
    var counter = 0;
    var amount = items.length;
    var currentImage = items[0];
    var currentDot = dots[0];
    box.classList.add('current');
    
    

    
    
    function navigate(direction) {
        currentImage.classList.remove('current');
        currentDot.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 && counter < 0) { 
          counter = amount - 1; 
        }
        if (direction === 1 && !items[counter]) { 
          counter = 0;
        }
        currentImage = items[counter];
        currentDot = dots[counter];
        currentImage.classList.add('current');
        currentDot.classList.add('current');

      }
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
      
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
    
    navigate(0);
};