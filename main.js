const bodyTag = document.querySelector("body")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      const title = document.querySelector(".title")
      clientTag.innerHTML = section.getAttribute("data-client")
    }
  })
})


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
    
    
    
    let rotation = distanceToSection / 100
    let width = distanceToSection / 10
   
    
    
  
    image.style.transform = `rotate(${rotation}deg)`
    image.style.width =  `${width}%`
    
  })
}

addMovement()

document.addEventListener("scroll", function () {
  addMovement()
})

window.addEventListener("resize", function () {
  addMovement()
})