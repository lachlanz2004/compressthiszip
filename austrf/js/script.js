function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // You can add additional form validation logic here before showing the confirmation message

    // Show the confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // Optionally, you can reset the form fields after submission
    document.getElementById("inquiryForm").reset();
}
