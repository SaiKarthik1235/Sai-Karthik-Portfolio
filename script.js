const sentences = [
    "Web Developer",
    "Designer",
    "Software Engineer"
];
let currentSentenceIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const speed = 100; // Speed of typing/deleting
const pauseTime = 1000; // Pause time before deleting or typing next sentence

const typingEffectElement = document.getElementById("typing-effect");

function typeSentence() {
    const currentSentence = sentences[currentSentenceIndex];
    if (isDeleting) {
        typingEffectElement.innerHTML = currentSentence.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingEffectElement.innerHTML = currentSentence.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentSentence.length) {
        // Pause before starting to delete
        setTimeout(() => {
            isDeleting = true;
        }, pauseTime);
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next sentence and start typing
        isDeleting = false;
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    }

    const typingSpeed = isDeleting ? speed / 2 : speed;
    setTimeout(typeSentence, typingSpeed);
}

// Start the typing effect
window.onload = typeSentence;
