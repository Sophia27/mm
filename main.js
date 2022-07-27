const bodyTag = document.querySelector("body")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const headerTag = document.querySelector("header")


document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      const title = document.querySelector("div.title")
//       clientTag.innerHTML = section.getAttribute("data-client")
      clientTag.innerHTML = section.getAttribute("data-client")
    }
  })
})
