const progressTag = document.querySelector ("div.progress")
const bodyTag = document.querySelector ("body")

document.addEventListener("scroll", function () {
 const pixels = window.pageYOffset
 const pageHeight = bodyTag.getBoundingClientRect().height
 const totalScrollableDistance = pageHeight - window.innerHeight
 const percentage = pixels / totalScrollableDistance
 
 progressTag.style.width = `${100 * percentage}%`
})



document.addEventListener("DOMContentLoaded", function () {


   

    /******************************* Height of Impressum ******************************/
    let bodyHeight = bodyTag.clientHeight;
    let neuTag = document.querySelector("div.liste")
    let neuHeight = neuTag.clientHeight;
    let neuWidth = neuHeight / bodyHeight * 100

    let indexTag = document.querySelector("div.liste")
    let indexHeight = indexTag.clientHeight;
    let indexWidth = indexHeight / bodyHeight * 100

    let infoTag = document.querySelector("div.liste")
    let infoHeight = infoTag.clientHeight;
    let infoWidth = infoHeight / bodyHeight * 100
    

    const neuLinkWidht = document.querySelector(".nav-link-1")
    neuLinkWidht.style.width = neuWidth + "%"


    const indexLinkWidht = document.querySelector(".nav-link-2")
    indexLinkWidht.style.width = indexWidth + "%"

    const infoLinkWidht = document.querySelector(".nav-link-3")
    infoLinkWidht.style.width = infoWidth + "%"

    window.addEventListener("resize", function () {
        neuLinkWidht.style.width = neuWidth + "%"
        indexLinkWidht.style.width = indexWidth + "%"
        infoLinkWidht.style.width = infoWidth + "%"
    })




})
