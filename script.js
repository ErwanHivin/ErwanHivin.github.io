const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
    button.addEventListener('click', function() {
        const content = button.closest('.skill-collapse').querySelector('.content');
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});