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
                        <h3>${character.name}</h3>
                        <ul class="character-details">
                            <li><strong>Age:</strong> ${character.age}</li>
                            <li><strong>Occupation:</strong> ${character.occupation}</li>
                            <li><strong>Hometown:</strong> ${character.hometown}</li>
                            <li><strong>Sexuality:</strong> ${character.sexuality}</li>
                            <li><strong>Pronouns:</strong> ${character.pronouns}</li>
                        </ul>
                        <a href="${character.moreLink}" class="view-more">View More</a>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
