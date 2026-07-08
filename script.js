// ==========================================
// THEME TOGGLE (Dark / Light Mode)
// ==========================================

const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    themeIcon.classList.toggle("fa-moon", !isDark);
    themeIcon.classList.toggle("fa-sun", isDark);
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme ? savedTheme === "dark" : systemPrefersDark);

themeToggleBtn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ==========================================
// RESUME LINKS — SINGLE SOURCE OF TRUTH
// ==========================================
// Update this ONE line whenever your resume changes.
// Every Resume button on the site (navbar, hero, footer) reads from here,
// so they can never point to different files again.

const RESUME_URL = "resume/Vijendra_Kumar_Resume.pdf";

document.querySelectorAll("#navResumeBtn, #heroResumeBtn, #footerResumeBtn")
    .forEach((btn) => { btn.href = RESUME_URL; });


// ==========================================
// PART 1
// TYPING ANIMATION
// ==========================================

const typingElement = document.getElementById("typing-text");

const words = [

    "Junior Data Analyst",

    "SQL Developer",

    "Excel Enthusiast",

    "Frontend Learner"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 100);

}

typingEffect();

// Scroll Progress Bar

window.addEventListener("scroll", () => {
    const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";
});




// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(

    ".about-card, .skill-card, .project-card, .education-card, .contact-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach((element)=>{

    revealObserver.observe(element);

});




// ==========================================
// SKILL BAR ANIMATION
// ==========================================

const progressBars = document.querySelectorAll(".skill-progress span");

const skillObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const width = entry.target.className;

            entry.target.style.width = "0";

            setTimeout(()=>{

                if(width==="sql") entry.target.style.width="90%";

                if(width==="excel") entry.target.style.width="88%";

                if(width==="sheets") entry.target.style.width="85%";

                if(width==="python") entry.target.style.width="45%";

                if(width==="html") entry.target.style.width="90%";

                if(width==="css") entry.target.style.width="88%";

                if(width==="js") entry.target.style.width="75%";

                if(width==="git") entry.target.style.width="70%";

            },200);

        }

    });

},

{

    threshold:.4

}

);

progressBars.forEach((bar)=>{

    skillObserver.observe(bar);

});




// ==========================================
// FLOATING ICON EFFECT
// ==========================================

const cards=document.querySelectorAll(

".skill-card,.project-card,.about-card"

);

cards.forEach((card)=>{

    let tiltFrame = null;

    card.addEventListener("mousemove",(e)=>{

        if (tiltFrame) return; // skip if a frame is already queued

        tiltFrame = requestAnimationFrame(() => {

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.transform=

            `rotateX(${-(y-rect.height/2)/25}deg)
             rotateY(${(x-rect.width/2)/25}deg)
             translateY(-8px)`;

            tiltFrame = null;

        });

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "rotateX(0) rotateY(0) translateY(0)";

    });

});

// ==========================================
// PART 2
// BACK TO TOP BUTTON
// ==========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backToTop.id = "backToTop";

backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ==========================================
// SMOOTH FADE ON PAGE LOAD
// ==========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});



// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML = `© ${new Date().getFullYear()} Vijendra Kumar. All Rights Reserved.`;

}



// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("%c👋 Welcome Recruiter!", "font-size:20px;color:#2563eb;font-weight:bold;");

console.log("%cPortfolio developed by Vijendra Kumar", "font-size:14px;color:#06b6d4;");



// ==========================================
// DISABLE RIGHT CLICK (Optional)
// ==========================================

// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });



// ==========================================
// END OF SCRIPT
// ==========================================