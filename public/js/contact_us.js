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

let intro_section_heading_Text = `Contact Us`;
let intro_section_paragraph_Text = `We are just one click away from you.`;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");

root.style.setProperty("--intro_section_bg_img_url", `url("../images/contact_us_bg.jpg")`);


// Coffee Offices Select Btn functioning
const offices_select_btn = document.getElementById("offices_select_btn");
const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");

let offices_select_btn_handler = () => {
    if(offices_select_btn.value == 1){
        first.forEach((element) => {element.style.display = "grid"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "none"});
    }
    else if(offices_select_btn.value == 2){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "grid"});
        third.forEach((element) => {element.style.display = "none"});
    }
    else if(offices_select_btn.value == 3){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "grid"});
    }
}

offices_select_btn.addEventListener("click", offices_select_btn_handler);