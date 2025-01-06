/*==================== FORM VALIDATION ====================*/
function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var isValid = true;
    
    // Clear previous error messages
    clearErrors();
    
    // Check empty fields
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }
    
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    }
    
    if (subject.value.trim() === "") {
        showError(subject, "Subject is required");
        isValid = false;
    }
    
    if (message.value.trim() === "") {
        showError(message, "Message is required");
        isValid = false;
    }

    // Check reCAPTCHA
    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        showError(document.querySelector('.g-recaptcha'), "Please complete the reCAPTCHA");
        isValid = false;
    }

    return isValid;
}

function showError(element, message) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.textContent = message;
    
    if (element.classList.contains('g-recaptcha')) {
        // Insert after reCAPTCHA
        element.insertAdjacentElement('afterend', errorSpan);
    } else {
        // For other form elements
        element.parentNode.appendChild(errorSpan);
    }
    element.classList.add('input-error');
}

function clearErrors() {
    // Remove all error messages
    document.querySelectorAll('.error-message').forEach(e => e.remove());
    // Remove error styling from inputs
    document.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));
}