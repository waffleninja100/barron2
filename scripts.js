let topScorers = [];

async function loadStoredData() {
    const storedData = localStorage.getItem('gameData');
    if (storedData) {
        const data = JSON.parse(storedData);
        topScorers = data.topScorers || [];
        totalScore = data.totalScore || 0;
        highScore = data.highScore || 0;
    }
}

async function saveStoredData() {
    const data = {
        topScorers,
        totalScore,
        highScore
    };
    localStorage.setItem('gameData', JSON.stringify(data));
}