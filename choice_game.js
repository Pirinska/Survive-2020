document.body.onload = nameDisplayCheck;

// constants for data storage
const rememberDiv = document.querySelector('.remember_name');
const forgetDiv = document.querySelector('.forget_name');
const form = document.querySelector('form');
const nameInput = document.querySelector('#putName');
const submitBtn = document.querySelector('#submitName');
const forgetBtn = document.querySelector('#forgetName');
const assistant = document.querySelector('#stored');

//stop the form from submitting
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function () {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('assistant', assistant.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
});

// run function when the 'Forget' button is clicked
forgetBtn.addEventListener('click', function () {
    // Remove the stored name from web storage
    localStorage.removeItem('name');
    localStorage.removeItem('assistant')
    // run nameDisplayCheck() to sort out displaying the
    // generic greeting again and updating the form display
    dataDisplayCheck();
});

// define the nameDisplayCheck() function
function dataDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if (localStorage.getItem('name') && localStorage.getItem('assistant')) {
        // hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        // hide the 'forget' part of the form and show the 'remember' part
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}
