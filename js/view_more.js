document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for the profile image
    const profileImage = document.querySelector('.character-profile img');
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.transform = 'scale(1.1)';
        profileImage.style.transition = 'transform 0.3s ease';
    });

    profileImage.addEventListener('mouseout', () => {
        profileImage.style.transform = 'scale(1)';
    });

    // Highlight the additional information section on hover
    const extrasSection = document.querySelector('.character-extras');
    extrasSection.addEventListener('mouseover', () => {
        extrasSection.style.backgroundColor = '#f0f8ff';
        extrasSection.style.transition = 'background-color 0.3s ease';
    });

    extrasSection.addEventListener('mouseout', () => {
        extrasSection.style.backgroundColor = 'white';
    });

    // Add smooth scrolling back to the top
    const navbar = document.querySelector('.navbar h1');
    navbar.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
