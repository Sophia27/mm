/**
 * Body transition
 */
 setTimeout(() => {
    document.body.classList.remove("state--loading");
  }, 50);
  
  document.body.style.setProperty(`--vh-100`, `${window.innerHeight}px`);
  
  window.addEventListener("resize", () => {
    document.body.style.setProperty(`--vh-100`, `${window.innerHeight}px`);
  });
  
  /*
   * Intersection observer for lazyloading and animations
   */
  let observer;
  const stack = [];
  const initObserver = () => {
    // animation observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // if v2 not available
          if (typeof entry.isVisible === "undefined") {
            if (
              entry.target.parentElement.classList.contains("index__media") ||
              entry.target.classList.contains("index__media") ||
              entry.target.classList.contains("responsive-image") ||
              entry.target.classList.contains("responsive-video")
            ) {
              if (
                entry.target.closest(".js-index__project") &&
                entry.target
                  .closest(".js-index__project")
                  .querySelector(".js-index__project-header.state--open")
              ) {
                stack.push(entry.target);
              }
            } else {
              stack.push(entry.target);
            }
          }
          // v2 integration
          if (entry.isIntersecting) {
            stack.push(entry.target);
          }
        }
      },
      {
        threshold: [0.1],
        trackVisibility: true,
        delay: 100,
      }
    );
  
    document.querySelectorAll(".will-appear").forEach((elem) => {
      observer.observe(elem);
    });
  
    document.querySelectorAll(".responsive-image").forEach((elem) => {
      observer.observe(elem);
    });
  
    document.querySelectorAll(".responsive-video").forEach((elem) => {
      observer.observe(elem);
    });
  };
  
  function checkStack() {
    if (stack.length) {
      stack[0].classList.add("did-appear");
  
      // if responsive image
      if (stack[0].querySelectorAll(":scope > [data-srcset]").length) {
        stack[0].querySelectorAll("[data-srcset]").forEach((elem) => {
          elem.setAttribute("srcset", elem.getAttribute("data-srcset"));
          elem.removeAttribute("data-srcset");
        });
  
        stack[0].querySelectorAll("[data-src]").forEach((elem) => {
          elem.setAttribute("src", elem.getAttribute("data-src"));
          elem.removeAttribute("data-src");
  
          elem.classList.add("did-appear");
        });
      }
      // if responsive video
      if (stack[0].classList.contains("responsive-video")) {
        stack[0].querySelectorAll("[data-src]").forEach((elem) => {
          elem.setAttribute("src", elem.getAttribute("data-src"));
          elem.removeAttribute("data-src");
  
          stack[0].load();
  
          elem.classList.add("did-appear");
        });
      }
  
      observer.unobserve(stack[0]);
      stack.shift();
    }
  }
  
  setInterval(() => {
    checkStack();
  }, 20);
  initObserver();
  
  /**
   * Home Section
   */
  
  const setSectionSize = () => {
    document.querySelectorAll(".js-home__section--image").forEach((section) => {
      const ratio =
        parseFloat(section.querySelector(".responsive-image").style.paddingTop) /
        100;
  
      if (window.innerWidth / window.innerHeight < 1) {
        section.style.height = `${window.innerWidth * ratio}px`;
      } else {
        section.removeAttribute("style");
      }
    });
  
    document.querySelectorAll(".js-home__section--video").forEach((section) => {
      const ratioVideo =
        section.querySelector(".home__video").dataset.height /
        section.querySelector(".home__video").dataset.width;
  
      if (window.innerWidth / window.innerHeight < 1) {
        section.style.height = `${window.innerWidth * ratioVideo}px`;
      } else {
        section.removeAttribute("style");
      }
    });
  };
  
  window.addEventListener("resize", () => {
    setSectionSize();
  });
  
  setSectionSize();
  
  const calculateHomeSections = () => {
    document
      .querySelectorAll(".js-home__section--image, .js-home__section--video")
      .forEach((section, index) => {
        const sectionBox = section.getBoundingClientRect();
        const innerElem = section.querySelector(".js-home__section-inner");
  
        if (
          sectionBox.y < window.innerHeight &&
          sectionBox.y > window.innerHeight * -1
        ) {
          const percentage =
            (sectionBox.y + sectionBox.height - window.innerHeight) /
            sectionBox.height;
          if (percentage > 0) {
            innerElem.style.width = `${(1 - percentage) * 100}%`;
            innerElem.style.height = `${(1 - percentage) * 100}%`;
          } else {
            innerElem.style.width = `100%`;
            innerElem.style.height = `100%`;
          }
        }
      });
  
    document.querySelectorAll(".js-home__section--text").forEach((section) => {
      const sectionBox = section.getBoundingClientRect();
  
      if (
        sectionBox.y < window.innerHeight &&
        sectionBox.y > window.innerHeight * -1
      ) {
        const percentage = sectionBox.y / window.innerHeight;
  
        section.querySelector(
          ".js-home__text"
        ).style.transform = `translate3d(0,${
          (percentage * window.innerHeight) / 4
        }px,0)`;
      }
    });
  };
  
  setTimeout(() => {
    calculateHomeSections();
  }, 20);
  
  
  
  /**
   * Scrollbar
   */
  if (document.querySelector(".scrolling-container")) {
    const bar = window.Scrollbar.init(
      document.querySelector(".scrolling-container"),
      {}
    );
  
    bar.addListener((s) => {
      calculateHomeSections();
    });
  }
  