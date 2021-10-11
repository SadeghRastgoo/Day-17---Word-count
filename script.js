"use strict";

const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}

const textArea = document.getElementById("text-area");
const wordCount = document.getElementById("word-count");
const characterCount = document.getElementById("character-count");
const longestCount = document.getElementById("longest-count");
const sentencesCount = document.getElementById("sentences-count");

textArea.addEventListener("input", count);

var sound = document.createElement("AUDIO");
sound.src = "beep.wav";

function count() {
  const text = textArea.value;
  const text2 = text.split("");
  const text3 = text2.filter(function (str) {
    return /\S/.test(str);
  });

  characterCount.textContent = text3.length;

  // const letters = wordCount.textContent;
  const text4 = text.split(" ");
  const text5 = text4.filter(function (str) {
    return /\S/.test(str);
  });
  wordCount.textContent = text5.length;

  let longest = text4[0];
  for (let i = 1; i < text4.length; i++) {
    if (text4[i].length > longest.length) longest = text4[i];
  }
  longestCount.textContent = longest;

  // Count Sentences
  const counts = {};
  const sampleArray = [...text2];
  sampleArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  sentencesCount.textContent = counts["."];

  sound.play();
}
