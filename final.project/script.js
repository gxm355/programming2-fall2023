document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        fetch('path-to-your-server-side-script.php', { // Make sure this path is correct
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Add code here to show a success message
        })
        .catch((error) => {
            console.error('Error:', error);
            // Add code here to show an error message
        });

        document.getElementById("contactForm").reset();
    });
});

