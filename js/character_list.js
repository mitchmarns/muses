fetch('./characters.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load character data.');
        }
        return response.json();
    })
    .then(characters => {
        const container = document.getElementById('character-container');

        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <div class="image-container">
                    <img src="${character.imageUrl}" alt="${character.name}">
                    <div class="info-overlay">
                        <h3 class="character-name">${character.name}</h3>
                        <table class="character-details">
                            <tr><td><strong>AGE:</strong></td><td>${character.age}</td></tr>
                            <tr><td><strong>OCCUPATION:</strong></td><td>${character.occupation.toUpperCase()}</td></tr>
                            <tr><td><strong>HOMETOWN:</strong></td><td>${character.hometown.toUpperCase()}</td></tr>
                            <tr><td><strong>SEXUALITY:</strong></td><td>${character.sexuality.toUpperCase()}</td></tr>
                            <tr><td><strong>PRONOUNS:</strong></td><td>${character.pronouns.toUpperCase()}</td></tr>
                        </table>
                        <a href="${character.moreLink}" class="view-more">VIEW MORE</a>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
