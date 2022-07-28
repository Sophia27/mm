document.addEventListener("DOMContentLoaded", function () {
 

   
    
    
    
    
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