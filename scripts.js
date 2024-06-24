async function loadStoredData() {
    try {
        const response = await fetch('scores.json');
        const data = await response.json();
        topScorers = data.topScorers || [];
        totalScore = data.totalScore || 0;
        highScore = topScorers.length > 0 ? topScorers[0].score : 0;
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

async function saveStoredData() {
    try {
        const data = {
            topScorers,
            totalScore
        };
        await fetch('scores.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error saving data:', error);
    }
}