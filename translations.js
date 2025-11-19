// Translation strings for the Happy Mood Game
const translations = {
    en: {
        title: "Catch the Happy! 😊",
        scoreLabel: "Score:",
        startButton: "Start Game",
        instructions: "Click the happy faces before they disappear!",
        gameOver: "Game Over! Score: {score}. Play Again?"
    },
    es: {
        title: "¡Atrapa la Felicidad! 😊",
        scoreLabel: "Puntuación:",
        startButton: "Iniciar Juego",
        instructions: "¡Haz clic en las caritas felices antes de que desaparezcan!",
        gameOver: "¡Juego Terminado! Puntuación: {score}. ¿Jugar de Nuevo?"
    },
    fr: {
        title: "Attrape le Bonheur! 😊",
        scoreLabel: "Score:",
        startButton: "Démarrer le Jeu",
        instructions: "Cliquez sur les visages heureux avant qu'ils ne disparaissent!",
        gameOver: "Jeu Terminé! Score: {score}. Rejouer?"
    },
    de: {
        title: "Fang das Glück! 😊",
        scoreLabel: "Punktzahl:",
        startButton: "Spiel Starten",
        instructions: "Klicke auf die fröhlichen Gesichter, bevor sie verschwinden!",
        gameOver: "Spiel Vorbei! Punktzahl: {score}. Nochmal Spielen?"
    },
    ar: {
        title: "اصطاد السعادة! 😊",
        scoreLabel: "النتيجة:",
        startButton: "ابدأ اللعبة",
        instructions: "انقر على الوجوه السعيدة قبل أن تختفي!",
        gameOver: "انتهت اللعبة! النتيجة: {score}. العب مرة أخرى؟"
    },
    zh: {
        title: "抓住快乐！😊",
        scoreLabel: "分数：",
        startButton: "开始游戏",
        instructions: "在笑脸消失之前点击它们！",
        gameOver: "游戏结束！分数：{score}。再玩一次？"
    },
    ja: {
        title: "ハッピーをキャッチ！😊",
        scoreLabel: "スコア：",
        startButton: "ゲームスタート",
        instructions: "笑顔が消える前にクリックしてください！",
        gameOver: "ゲームオーバー！スコア：{score}。もう一度プレイ？"
    },
    pt: {
        title: "Pegue a Felicidade! 😊",
        scoreLabel: "Pontuação:",
        startButton: "Iniciar Jogo",
        instructions: "Clique nas carinhas felizes antes que desapareçam!",
        gameOver: "Fim de Jogo! Pontuação: {score}. Jogar Novamente?"
    },
    ru: {
        title: "Поймай Счастье! 😊",
        scoreLabel: "Счёт:",
        startButton: "Начать Игру",
        instructions: "Нажимайте на весёлые лица, пока они не исчезли!",
        gameOver: "Игра Окончена! Счёт: {score}. Играть Снова?"
    },
    hi: {
        title: "खुशी पकड़ो! 😊",
        scoreLabel: "स्कोर:",
        startButton: "खेल शुरू करें",
        instructions: "खुश चेहरों पर क्लिक करें इससे पहले कि वे गायब हो जाएं!",
        gameOver: "खेल खत्म! स्कोर: {score}। फिर से खेलें?"
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Get translation for a key
function t(key, params = {}) {
    let translation = translations[currentLanguage]?.[key] || translations.en[key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, params[param]);
    });
    
    return translation;
}

// Change language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateTranslations();
    }
}

// Update all translations in the DOM
function updateTranslations() {
    // Update title
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = t('title');
    }
    
    // Update score label
    const scoreBoardElement = document.querySelector('.score-board');
    if (scoreBoardElement) {
        const scoreValue = document.getElementById('score').textContent;
        scoreBoardElement.innerHTML = `${t('scoreLabel')} <span id="score">${scoreValue}</span>`;
    }
    
    // Update start button if visible
    const startBtn = document.getElementById('start-btn');
    if (startBtn && startBtn.style.display !== 'none') {
        // Check if it's the initial start or game over message
        if (startBtn.textContent.includes('Score') || startBtn.textContent.includes('Puntuación') || 
            startBtn.textContent.includes('النتيجة') || startBtn.textContent.includes('分数') ||
            startBtn.textContent.includes('スコア') || startBtn.textContent.includes('Счёт') ||
            startBtn.textContent.includes('स्कोर')) {
            // It's a game over message, need to extract score
            const scoreMatch = startBtn.textContent.match(/\d+/);
            if (scoreMatch) {
                startBtn.textContent = t('gameOver', { score: scoreMatch[0] });
            }
        } else {
            startBtn.textContent = t('startButton');
        }
    }
    
    // Update instructions
    const instructionsElement = document.querySelector('.instructions');
    if (instructionsElement) {
        instructionsElement.textContent = t('instructions');
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}
