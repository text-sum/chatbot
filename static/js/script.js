// Get the form element and listen for form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the input text from the textarea
        const inputText = document.querySelector('textarea[name="input_text"]').value;

        // Display loading message or spinner
        showLoading();

        // Send a POST request to the /summarize route with the input text
        fetch('/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `input_text=${encodeURIComponent(inputText)}`,
        })
            .then(response => response.text())
            .then(data => {
                // Update the result container with the summarized text
                updateResult(data);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error or display error message
                showError();
            });
    });
});

// Function to display loading message or spinner
function showLoading() {
    // You can add code to display a loading spinner or message
}

// Function to update the result container with the summarized text
function updateResult(data) {
    const resultContainer = document.querySelector('.result');
    if (resultContainer) {
        resultContainer.innerHTML = data;
    }
}

// Function to handle error or display error message
function showError() {
    // You can add code to display an error message or handle errors
}