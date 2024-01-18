document.addEventListener('DOMContentLoaded', function () {
    // Select all the images in the painting-grid
    var images = document.querySelectorAll('.painting-grid .painting a');

    images.forEach(function (image) {
        image.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            var modalId = this.getAttribute('href');
            var modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Select all close buttons in modals
    var closeButtons = document.querySelectorAll('.modal .close');

    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
});
