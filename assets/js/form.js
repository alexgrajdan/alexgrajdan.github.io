/*==================== FORM VALIDATION ====================*/
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

function onSubmit() {
    if (validateForm()) {
        document.getElementById("myForm").submit();
    }
}
