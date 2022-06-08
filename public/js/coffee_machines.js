// Mobile Nav
let responsive_nav_icon = document.getElementById("responsive_nav_icon");
let mobile_nav = document.getElementById("mobile_nav");

let triggerResponsiveNav = () => {
    mobile_nav.style.transform == `scaleX(0)` ? mobile_nav.style.transform = `scaleX(1)` : mobile_nav.style.transform = `scaleX(0)`;
}

responsive_nav_icon.addEventListener("click", triggerResponsiveNav);

// Intro section modification
let intro_section_heading = document.getElementById("intro_section_heading");
let intro_section_paragraph = document.getElementById("intro_section_paragraph");

let intro_section_heading_Text = ``;
let intro_section_paragraph_Text = ``;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");
root.style.setProperty("--intro_section_bg_img_url", `url("../images/shutter_stock_coffee_machine_cleanup.jpg")`);


// Inner Navigation Event Listener
const inner_navigation_section = document.querySelectorAll(".inner_navigation_section");
const our_coffee_navigation_item = document.querySelectorAll(".our_coffee_navigation_item");


window.addEventListener("scroll", () => {
    let currentSection = ``;

    inner_navigation_section.forEach(section => {
        if(window.scrollY >= (section.offsetTop - section.clientHeight / 3)){
            currentSection = section.getAttribute("class");
        }
    });
    
    if(currentSection.includes("small")){
        our_coffee_navigation_item.forEach(item => {
            item.classList.remove("item_active");
            if(item.classList.contains("small")){
                item.classList.add("item_active");
            }
        });
    }
    
    else if(currentSection.includes("medium")){
        our_coffee_navigation_item.forEach(item => {
            item.classList.remove("item_active");
            if(item.classList.contains("medium")){
                item.classList.add("item_active");
            }
        });
    }

    else if(currentSection.includes("large")){
        our_coffee_navigation_item.forEach(item => {
            item.classList.remove("item_active");
            if(item.classList.contains("large")){
                item.classList.add("item_active");
            }
        });
    }
});