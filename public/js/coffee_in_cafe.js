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

let intro_section_heading_Text = `Coffee in cafe`;
let intro_section_paragraph_Text = `
Professionally customized and reliable solutions for convenience stores, hotels, cafés and restaurants to serve the highest in-cup-quality.`;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if(vw > 765){
    root.style.setProperty("--intro_section_bg_img_url", `url("../images/CA_Coffee_in_Cafe_2x_2.png")`);
}
else{
    root.style.setProperty("--intro_section_bg_img_url", `url("../images/CA_Home_Coffee_in_cafe@2x.png")`);
}
