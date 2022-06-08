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

let intro_section_heading_Text = `FAQs`;
let intro_section_paragraph_Text = `Better to ask a question than to remain ignorant.`;

intro_section_heading.innerText = intro_section_heading_Text;
intro_section_paragraph.innerText = intro_section_paragraph_Text;

let root = document.querySelector(":root");

root.style.setProperty("--intro_section_bg_img_url", `url("../images/faq_bg.jpg")`);

// FAQs Collapse Functioning
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Coffee Offices Select Btn functioning
const faqs_select_btn = document.getElementById("faqs_select_btn");
const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");
const fourth = document.querySelectorAll(".fourth");
const fifth = document.querySelectorAll(".fifth");

console.log(faqs_select_btn.value);

let faqs_select_btn_handler = () => {
    if(faqs_select_btn.value == 1){
        first.forEach((element) => {element.style.display = "block"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "none"});
        fourth.forEach((element) => {element.style.display = "none"});
        fifth.forEach((element) => {element.style.display = "none"});
    }
    else if(faqs_select_btn.value == 2){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "block"});
        third.forEach((element) => {element.style.display = "none"});
        fourth.forEach((element) => {element.style.display = "none"});
        fifth.forEach((element) => {element.style.display = "none"});
    }
    else if(faqs_select_btn.value == 3){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "block"});
        fourth.forEach((element) => {element.style.display = "none"});
        fifth.forEach((element) => {element.style.display = "none"});
    }
    else if(faqs_select_btn.value == 4){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "none"});
        fourth.forEach((element) => {element.style.display = "block"});
        fifth.forEach((element) => {element.style.display = "none"});
    }
    else if(faqs_select_btn.value == 5){
        first.forEach((element) => {element.style.display = "none"});
        second.forEach((element) => {element.style.display = "none"});
        third.forEach((element) => {element.style.display = "none"});
        fourth.forEach((element) => {element.style.display = "none"});
        fifth.forEach((element) => {element.style.display = "block"});
    }
}

faqs_select_btn.addEventListener("click", faqs_select_btn_handler);