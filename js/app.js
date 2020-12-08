/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector(".navbar__menu");
const ulElement = document.querySelector("#navbar__list");
const liElement = document.createElement("li");
let defaultActiveItems = 3;
let listFfElements = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const menuElements = function() {
    ulElement.innerHTML = "";
    for(let i = 0; i < listFfElements.length; i++) {
        liElement.innerHTML += `<a class="nav-items" href="#section${i + 1}">Section ${i + 1}</a>`;
        ulElement.appendChild(liElement);
        defaultActiveItems += 1;
    }
}

// Add class 'active' to section when near top of viewport
const addActiveSection = function(e) {
    e.preventDefault()
    const sectionEl = document.querySelector(e.target.hash)
    const prevSection = document.querySelector('.your-active-class');
    prevSection.classList.remove("your-active-class")
    sectionEl.classList.add("your-active-class")
}

liElement.addEventListener("click", addActiveSection);


// Scroll to anchor ID using scrollTO event
const scrollToSection = function(e) {
    e.preventDefault()
    const sectionEl = document.querySelector(e.target.hash);
    sectionEl.scrollIntoView({behavior: 'smooth'})
}

liElement.addEventListener("click", scrollToSection);

menuElements();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


