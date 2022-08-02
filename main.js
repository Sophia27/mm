const bodyTag = document.querySelector("body")
const sections = document.querySelectorAll(".teaser-container")
const titleTag = document.querySelector("div.client")


// Anzeigen vom Titel
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      //const title = document.querySelector(".title")
      titleTag.innerHTML = section.getAttribute("data-client")

    }
  })
})

// Scale on scroll
const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
   // lets find the middle of each section
  // (section, index) => {}
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    
    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection
    
    // pick the tags to parallax
    const image = section.querySelector("img")

    
   
    if (distanceToSection > -500) {
      image.classList.add("scaled");
    } else {
      image.classList.remove("scaled");
    }
   
    
  })
}

addMovement()

document.addEventListener("scroll", function () {
  addMovement()
})

window.addEventListener("resize", function () {
  addMovement()
})


	

// setTimeout(() => {
//   addMovement()
// }, 50);
