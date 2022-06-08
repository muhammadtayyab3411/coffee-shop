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

let intro_section_heading_Text = `Coffee in vending`;
let intro_section_paragraph_Text = `Grab a great tasting cup of coffee not a run-of-the mill brew`;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");

root.style.setProperty("--intro_section_bg_img_url", `url("../images/new_ca_onthego_1_2_1.jpg")`);