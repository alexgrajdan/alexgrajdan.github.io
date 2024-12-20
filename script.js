document.addEventListener('DOMContentLoaded', function() {
    // Function to change the background color of the body
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    // Example usage: Change background color to lightblue
    changeBackgroundColor('lightblue');

    // Function to display an alert when a button is clicked
    function setupButtonClickAlert(buttonId, message) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                alert(message);
            });
        }
    }

    // Example usage: Setup alert for a button with id 'myButton'
    setupButtonClickAlert('myButton', 'Button was clicked!');
});