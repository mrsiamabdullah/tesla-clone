// OPEN SIDE MENU
document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("sideNav").classList.remove("right-[-50%]");
  document.getElementById("sideNav").classList.add("right-0");
  document.getElementById("mainDiv").classList.add("blur-sm");
});

// CLOSE SIDE MENU
document.getElementById("closeIcon").addEventListener("click", () => {
  document.getElementById("sideNav").classList.add("right-[-50%]");
  document.getElementById("sideNav").classList.remove("right-0");
  document.getElementById("mainDiv").classList.remove("blur-sm");
});

// SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll("section[id]");

let scrollActive = () => {
  let scrollDown = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// SCROLL ANIMATION
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

let hiddenElements = document.querySelectorAll(".car-buttons");
hiddenElements.forEach((el) => observer.observe(el));
