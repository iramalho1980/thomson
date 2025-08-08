document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const glassButtons = document.querySelectorAll('.glass-button');
    const popup = document.getElementById('popup');
    const popupIframe = document.getElementById('popup-iframe');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const frameContent = this.closest('.frame').querySelector('.frame-content');
            frameContent.classList.toggle('active');
            this.textContent = frameContent.classList.contains('active') ? '-' : '+';
        });
    });

    glassButtons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.dataset.link;
            const text = this.dataset.text;

            if (link) {
                popupIframe.src = link;
                popupIframe.style.display = 'block';
                popupText.style.display = 'none';
            } else if (text) {
                popupText.textContent = text;
                popupIframe.style.display = 'none';
                popupText.style.display = 'flex';
            }
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        popupIframe.src = ''; // Clear iframe content
        popupText.textContent = ''; // Clear text content
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
            popupIframe.src = '';
            popupText.textContent = '';
        }
    });
});

