let intro_section_heading = document.getElementById("intro_section_heading");
let intro_section_paragraph = document.getElementById("intro_section_paragraph");

let intro_section_heading_Text = `Coffee at the Office`;
let intro_section_paragraph_Text = `You deserve a great cup of coffee wherever you are. Your office coffee should be nothing less`;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");

root.style.setProperty("--intro_section_bg_img_url", `url("../images/new_ca_office_1_2_1.jpg")`);

// Mobile Nav
let responsive_nav_icon = document.getElementById("responsive_nav_icon");
let mobile_nav = document.getElementById("mobile_nav");

let triggerResponsiveNav = () => {
    mobile_nav.style.transform == `scaleX(0)` ? mobile_nav.style.transform = `scaleX(1)` : mobile_nav.style.transform = `scaleX(0)`;
}



responsive_nav_icon.addEventListener("click", triggerResponsiveNav);