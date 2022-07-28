document.addEventListener("DOMContentLoaded", function () {
 

    /******************************* OVERLAYS ******************************/
    
    const openTag = document.querySelector('div.open-overlay-1')
    const overlay = document.querySelector('div.overlay-bio')
    const closeTag = document.querySelector('div.close-overlay-1')
    const bodyTag = document.querySelector ('body')
    const logoTag = document.querySelector('div.overlay span')
    const introTag = document.querySelector('div.intro')
    const headerTag = document.querySelector('header')
    const projekteTag = document.querySelector('div.wrapper')
    
    
    introTag.addEventListener('click', function(event) {
      introTag.classList.toggle('hide')
      headerTag.classList.remove('blur')
      projekteTag.classList.remove('blur')
    
    });
    
    
    openTag.addEventListener('click', function(event) {
      overlay.classList.toggle('block')
      bodyTag.classList.add('noscroll')
      logoTag.classList.add('pulse')
      event.preventDefault()
    });
    
    closeTag.addEventListener('click', function(event) {
      overlay.classList.remove('block')
      bodyTag.classList.remove('noscroll')
      logoTag.classList.remove('pulse')
      event.preventDefault()
    });
    
    logoTag.addEventListener('click', function(event) {
      overlay.classList.remove('block')
      bodyTag.classList.remove('noscroll')
      event.preventDefault()
    });
    
    
    const openTag2 = document.querySelector('div.open-overlay-2')
    const overlay2 = document.querySelector('div.overlay-news')
    
    
    openTag2.addEventListener('click', function(event) {
      overlay2.classList.toggle('block')
      openTag2.classList.add('white')
      if (overlay2.classList.contains('block')) {
        
        openTag2.classList.add('white')
      } else {
        openTag2.classList.remove('white')
      }
      event.preventDefault()
    })
    
    
    
    
    /******************************* ACCORDION ******************************/
    const accordionTag = document.querySelectorAll(".titel-container");
    let i;
    
    for (i = 0; i < accordionTag.length; i++) {
      accordionTag[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
          panel.style.animation = "fadein 1s";
        }
      });
    }
    
    
    
    const closeButton = document.querySelectorAll(".close")
    let c
    
    for (c = 0; c < closeButton.length; c++) {
      closeButton[c].addEventListener("click", function () {
        const a = this;
        a.style.display = "none";
        
        
      });
    }
    
    
     
    
    })