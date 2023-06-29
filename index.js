// Function to handle form submission
function submitFeedback(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var travelers = document.getElementById('travelers').value;
  var check = document.getElementById('check').checked;
  const closeButton = document.querySelector('closeButton');
  var isValid=true;

  // Perform validation
  if (name.trim() === '') {
    alert('Please enter your name.');
    isValid = false;
  }

  if (email.trim() === '') {
    alert('Please enter your email address.');
    // return;
    isValid = false;
  }

  if (phone.trim() === '') {
    alert('Please enter your phone number.');
    // return;
    isValid = false;
  }
  if (phone.length!==10){
    alert('Please enter correct phone number.');
    // return;
    isValid = false;
  }

  if (date.trim() === '') {
    alert('Please enter the date.');
    // return;
    isValid = false;
  }
  if (!check) {
    alert('Please agree to the terms and conditions.');
    isValid = false;
  }

  if (travelers.trim() === '') {
    alert('Please enter the number of travelers.');
    // return;
    isValid = false;
  }
  if (!isValid) {
    return;
  }

  // Form is valid, perform further actions (e.g., submit the form)
  alert('Thank you for your response!');
  document.getElementById('feedbackForm').reset();
}
// Add event listener to form submission
document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);

var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function() {
  // Handle close button click event
  var container = document.querySelector('.container');
  container.style.display = 'none';
});