
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.querySelector('.btn');

    scrollToTopButton.addEventListener('click', function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


