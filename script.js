// Bible verses
const verses = [
{
text: "For God so loved the world that He gave His only begotten Son.",
ref: "John 3:16"
},
{
text: "I can do all things through Christ who strengthens me.",
ref: "Philippians 4:13"
},
{
text: "The Lord is my shepherd; I shall not want.",
ref: "Psalm 23:1"
},
{
text: "Trust in the Lord with all your heart.",
ref: "Proverbs 3:5"
},
{
text: "For I know the plans I have for you.",
ref: "Jeremiah 29:11"
}
];

const verse = document.getElementById("dailyVerse");

if (verse) {
let index = 0;

function changeVerse() {
    verse.innerHTML =
        `"${verses[index].text}"<br><strong>${verses[index].ref}</strong>`;
    index = (index + 1) % verses.length;
}

changeVerse();
setInterval(changeVerse, 8000);
}

// Welcome message
window.onload = function () {
    console.log("Welcome to Salvation Church of Africa");
};
// Sunday Service Countdown

function updateCountdown() {
    const now = new Date();

    const nextSunday = new Date();
    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));

    nextSunday.setHours(10, 30, 0, 0);

    if (now > nextSunday) {
        nextSunday.setDate(nextSunday.getDate() + 7);
    }

    const diff = nextSunday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes`;
    }
}

updateCountdown();
setInterval(updateCountdown, 60000);
// Hero Slideshow

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

slides[currentSlide].classList.remove("active");

currentSlide = (currentSlide + 1) % slides.length;

slides[currentSlide].classList.add("active");

}

if (slides.length > 0) {
    setInterval(showSlide, 5000);
}
