const progressTag = document.querySelector ("div.progress")
const bodyTag = document.querySelector ("body")

document.addEventListener("scroll", function () {
 const pixels = window.pageYOffset
 const pageHeight = bodyTag.getBoundingClientRect().height
 const totalScrollableDistance = pageHeight - window.innerHeight
 const percentage = pixels / totalScrollableDistance
 
 progressTag.style.width = `${100 * percentage}%`
})
