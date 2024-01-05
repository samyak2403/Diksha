const dynamicText = document.querySelector("h1 span");
const words = ["I miss Diksha ❤️",
"I know that was wrong of me to lie, and I hope you can forgive me, Diksha."
,"You needed me, and I’m really sorry for not being there for you. I should have supported you, Diksha.", 
 "I feel really bad that you felt hurt, and I want you to know that I would never intend to hurt you, Diksha",
  "Everything"
,"Everything",
"Everything",
"Everything"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();