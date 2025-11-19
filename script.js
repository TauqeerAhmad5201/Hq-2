const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const languageSelect = document.getElementById('language-select');

let score = 0;
let gameInterval;
let isPlaying = false;

const emojis = ['😊', '😄', '😁', '😆', '🥰', '😍', '🤩', '🥳'];

// Initialize language
languageSelect.value = currentLanguage;
updateTranslations();

// Language change listener
languageSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    isPlaying = true;
    startBtn.style.display = 'none';
    
    // Spawn a smiley every 600ms
    gameInterval = setInterval(spawnSmiley, 600);
    
    // Game lasts for 30 seconds
    setTimeout(endGame, 30000);
}

function spawnSmiley() {
    if (!isPlaying) return;

    const smiley = document.createElement('div');
    smiley.classList.add('smiley');
    smiley.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random position
    // Subtract 50 to keep it within bounds (approx size of smiley)
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    
    smiley.style.left = `${x}px`;
    smiley.style.top = `${y}px`;
    
    smiley.addEventListener('click', () => catchSmiley(smiley));
    
    gameArea.appendChild(smiley);
    
    // Remove smiley after 2 seconds if not clicked
    setTimeout(() => {
        if (smiley.parentNode) {
            smiley.remove();
        }
    }, 2000);
}

function catchSmiley(element) {
    if (!isPlaying) return;
    
    score++;
    scoreDisplay.textContent = score;
    
    // Visual feedback
    createConfetti(element.offsetLeft + 20, element.offsetTop + 20);
    
    element.remove();
}

function createConfetti(x, y) {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#1a535c'];
    
    for (let i = 0; i < 8; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        
        // Random spread direction
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        
        confetti.style.setProperty('--tx', `${tx}px`);
        confetti.style.setProperty('--ty', `${ty}px`);
        
        gameArea.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 800);
    }
}

function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    
    // Clear remaining smileys
    const smileys = document.querySelectorAll('.smiley');
    smileys.forEach(s => s.remove());
    
    startBtn.textContent = t('gameOver', { score: score });
    startBtn.style.display = 'block';
}