const startScreen = document.getElementById("start-screen");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");

const startBtn = document.getElementById("startBtn");
const introBtn = document.getElementById("introBtn");

startBtn.addEventListener("click", () => {
startScreen.classList.remove("active");
introScreen.classList.add("active");
});
let touchStartY = 0;

document.addEventListener("touchstart", (e) => {
    if (startScreen.classList.contains("active")) {
        touchStartY = e.touches[0].clientY;
    }
});

document.addEventListener("touchend", (e) => {

    if (startScreen.classList.contains("active")) {

        let touchEndY = e.changedTouches[0].clientY;

        if (touchStartY - touchEndY > 50) {

            startScreen.classList.remove("active");
            introScreen.classList.add("active");
            window.scrollTo({
    top: 0,
    behavior: "instant"
});

        }
    }

});
introBtn.addEventListener("click", () => {

    const rocket = document.getElementById("rocket");

console.log(rocket);

rocket.classList.add("rocket-fly");

    setTimeout(() => {

        introScreen.classList.remove("active");
        gameScreen.classList.add("active");

    }, 800);

});
const checkBtn = document.getElementById("checkBtn");
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const success = document.getElementById("success");

checkBtn.addEventListener("click", () => {

if (answer.value.toLowerCase() === "prezent") {

document.getElementById("meme1").style.display = "none";
document.getElementById("main-photo1").style.display = "none";

answer.style.display = "none";
checkBtn.style.display = "none";
message.style.display = "none";
document.getElementById("question1").style.display = "none";
success.style.display = "block";
document.getElementById("successImage1").style.display = "block";
message.innerHTML = "Brawo! 🎉";

} else {

document.getElementById("main-photo1").style.display = "none";
document.getElementById("meme1").style.display = "block";

document.querySelector("#question1 h2").style.display = "none";
document.querySelector("#question1 p").style.display = "none";

answer.style.display = "none";
checkBtn.style.display = "none";

message.innerHTML = "Niestety to nie to, spróbuj jeszcze raz 🩷";

document.getElementById("backBtn1").style.display = "block";

}

const backBtn1 = document.getElementById("backBtn1");

backBtn1.addEventListener("click", () => {

document.getElementById("main-photo1").style.display = "block";
document.getElementById("meme1").style.display = "none";

answer.style.display = "block";
checkBtn.style.display = "block";
document.querySelector("#question1 h2").style.display = "block";
document.querySelector("#question1 p").style.display = "block";
message.innerHTML = "";

backBtn1.style.display = "none";

});
});
const nextBtn = document.getElementById("nextBtn");
const stage2Screen = document.getElementById("stage2-screen");

nextBtn.addEventListener("click", () => {
gameScreen.classList.remove("active");
stage2Screen.classList.add("active");
})
const checkBtn2 = document.getElementById("checkBtn2");
const answer2 = document.getElementById("answer2");
const message2 = document.getElementById("message2");
const success2 = document.getElementById("success2");

checkBtn2.addEventListener("click", () => {

if (answer2.value.toLowerCase() === "prezent") {

document.querySelector("#stage2-screen .main-photo").style.display = "none";
document.getElementById("meme2").style.display = "none";

answer2.style.display = "none";
checkBtn2.style.display = "none";
message2.style.display = "none";
document.getElementById("question2").style.display = "none";
success2.style.display = "block";
message2.innerHTML = "Brawo! 🎉";


} else {

document.querySelector("#stage2-screen .main-photo").style.display = "none";
document.getElementById("meme2").style.display = "block";

document.querySelector("#question2 h2").style.display = "none";
document.querySelector("#question2 p").style.display = "none";

answer2.style.display = "none";
checkBtn2.style.display = "none";

message2.innerHTML = "Niestety to nie to, spróbuj jeszcze raz 🩷";

document.getElementById("backBtn2").style.display = "block";

}
});
const backBtn2 = document.getElementById("backBtn2");

backBtn2.addEventListener("click", () => {

document.querySelector("#stage2-screen .main-photo").style.display = "block";
document.getElementById("meme2").style.display = "none";

document.querySelector("#question2 h2").style.display = "block";
document.querySelector("#question2 p").style.display = "block";

answer2.style.display = "block";
checkBtn2.style.display = "block";

message2.innerHTML = "";

backBtn2.style.display = "none";

});
const nextBtn2 = document.getElementById("nextBtn2");
const stage3Screen = document.getElementById("stage3-screen");

nextBtn2.addEventListener("click", () => {
stage2Screen.classList.remove("active");
stage3Screen.classList.add("active");
});
const checkBtn3 = document.getElementById("checkBtn3");
const answer3 = document.getElementById("answer3");
const message3 = document.getElementById("message3");
const success3 = document.getElementById("success3");

checkBtn3.addEventListener("click", () => {

if (answer3.value.toLowerCase() === "prezent") {

document.querySelector("#stage3-screen .main-photo").style.display = "none";
document.getElementById("meme3").style.display = "none";

answer3.style.display = "none";
checkBtn3.style.display = "none";
message3.style.display = "none";
document.getElementById("question3").style.display = "none";
success3.style.display = "block";
message3.innerHTML = "Brawo! 🎉";


} else {

document.querySelector("#stage3-screen .main-photo").style.display = "none";
document.getElementById("meme3").style.display = "block";

document.querySelector("#question3 h2").style.display = "none";
document.querySelector("#question3 p").style.display = "none";

answer3.style.display = "none";
checkBtn3.style.display = "none";

message3.innerHTML = "Niestety to nie to, spróbuj jeszcze raz 🩷";

document.getElementById("backBtn3").style.display = "block";

}

});
const backBtn3 = document.getElementById("backBtn3");

backBtn3.addEventListener("click", () => {

document.querySelector("#stage3-screen .main-photo").style.display = "block";
document.getElementById("meme3").style.display = "none";

document.querySelector("#question3 h2").style.display = "block";
document.querySelector("#question3 p").style.display = "block";

answer3.style.display = "block";
checkBtn3.style.display = "block";

message3.innerHTML = "";

backBtn3.style.display = "none";

});
const nextBtn3 = document.getElementById("nextBtn3");
const stage4Screen = document.getElementById("stage4-screen");

nextBtn3.addEventListener("click", () => {
stage3Screen.classList.remove("active");
stage4Screen.classList.add("active");
});


const checkBtn4 = document.getElementById("checkBtn4");
const answer4 = document.getElementById("answer4");
const message4 = document.getElementById("message4");
const success4 = document.getElementById("success4");

checkBtn4.addEventListener("click", () => {

if (answer4.value.toLowerCase() === "prezent") {

document.querySelector("#stage4-screen .main-photo").style.display = "none";
document.getElementById("meme4").style.display = "none";

answer4.style.display = "none";
checkBtn4.style.display = "none";
message4.style.display = "none";
document.getElementById("question4").style.display = "none";
success4.style.display = "block";
message4.innerHTML = "Brawo! 🎉";


} else {

document.querySelector("#stage4-screen .main-photo").style.display = "none";
document.getElementById("meme4").style.display = "block";

document.querySelector("#question4 h2").style.display = "none";
document.querySelector("#question4 p").style.display = "none";

answer4.style.display = "none";
checkBtn4.style.display = "none";

message4.innerHTML = "Niestety to nie to, spróbuj jeszcze raz 🩷";

document.getElementById("backBtn4").style.display = "block";

}

});
const backBtn4 = document.getElementById("backBtn4");

backBtn4.addEventListener("click", () => {

document.querySelector("#stage4-screen .main-photo").style.display = "block";
document.getElementById("meme4").style.display = "none";

document.querySelector("#question4 h2").style.display = "block";
document.querySelector("#question4 p").style.display = "block";

answer4.style.display = "block";
checkBtn4.style.display = "block";

message4.innerHTML = "";

backBtn4.style.display = "none";

});
const nextBtn4 = document.getElementById("nextBtn4");
const stage5Screen = document.getElementById("stage5-screen");

nextBtn4.addEventListener("click", () => {
stage4Screen.classList.remove("active");
stage5Screen.classList.add("active");
});
const checkBtn5 = document.getElementById("checkBtn5");
const answer5 = document.getElementById("answer5");
const message5 = document.getElementById("message5");
const success5 = document.getElementById("success5");

checkBtn5.addEventListener("click", () => {

if (answer5.value.toLowerCase() === "prezent") {

document.querySelector("#stage5-screen .main-photo").style.display = "none";
document.getElementById("meme5").style.display = "none";

answer5.style.display = "none";
checkBtn5.style.display = "none";
message5.style.display = "none";
document.getElementById("question5").style.display = "none";
success5.style.display = "block";
message5.innerHTML = "Brawo! 🎉";


} else {

document.querySelector("#stage5-screen .main-photo").style.display = "none";
document.getElementById("meme5").style.display = "block";

document.querySelector("#question5 h2").style.display = "none";
document.querySelector("#question5 p").style.display = "none";

answer5.style.display = "none";
checkBtn5.style.display = "none";

message5.innerHTML = "Niestety to nie to, spróbuj jeszcze raz 🩷";

document.getElementById("backBtn5").style.display = "block";

}

});
const backBtn5 = document.getElementById("backBtn5");

backBtn5.addEventListener("click", () => {

document.querySelector("#stage5-screen .main-photo").style.display = "block";
document.getElementById("meme5").style.display = "none";

document.querySelector("#question5 h2").style.display = "block";
document.querySelector("#question5 p").style.display = "block";

answer5.style.display = "block";
checkBtn5.style.display = "block";

message5.innerHTML = "";

backBtn5.style.display = "none";

});