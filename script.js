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
