# Happy Mood Game 😊

A fun browser-based game where you catch happy emoji faces before they disappear!

## Features

- Click on happy faces to score points
- 30-second game rounds
- Colorful confetti effects
- Multi-language support (10 languages!)

## Supported Languages

The game is currently available in the following languages:

- 🇬🇧 English
- 🇪🇸 Español (Spanish)
- 🇫🇷 Français (French)
- 🇩🇪 Deutsch (German)
- 🇸🇦 العربية (Arabic)
- 🇨🇳 中文 (Chinese)
- 🇯🇵 日本語 (Japanese)
- 🇧🇷 Português (Portuguese)
- 🇷🇺 Русский (Russian)
- 🇮🇳 हिन्दी (Hindi)

## How to Play

1. Open `index.html` in your web browser
2. Select your preferred language from the dropdown in the top-right corner
3. Click "Start Game" to begin
4. Click on the happy faces as they appear
5. Try to get the highest score in 30 seconds!

## Adding a New Language

To add support for a new language:

1. Open `translations.js`
2. Add a new language object to the `translations` object with a two-letter language code (e.g., `it` for Italian)
3. Provide translations for all the following keys:
   - `title`: Main game title
   - `scoreLabel`: Label for the score display
   - `startButton`: Text for the start button
   - `instructions`: Game instructions text
   - `gameOver`: Game over message (use `{score}` as a placeholder for the score)

Example for Italian:

```javascript
it: {
    title: "Prendi la Felicità! 😊",
    scoreLabel: "Punteggio:",
    startButton: "Inizia Gioco",
    instructions: "Clicca sulle faccine felici prima che scompaiano!",
    gameOver: "Fine del Gioco! Punteggio: {score}. Giocare Ancora?"
}
```

4. Add the language to the dropdown in `index.html`:

```html
<option value="it">Italiano</option>
```

5. Test your translation by selecting it from the language dropdown

## Technical Details

- Pure HTML, CSS, and JavaScript
- No external dependencies
- Uses localStorage to remember language preference
- Responsive design
- Keyboard and mouse support

## Files

- `index.html` - Main HTML structure
- `script.js` - Game logic
- `style.css` - Styling and animations
- `translations.js` - Translation strings and i18n system

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- CSS3 animations
- localStorage API

## License

Free to use and modify!
