const emailField = document.getElementById('emailAddress');
const button = document.getElementById('button');
const response = document.getElementById('response');
const iconError = document.querySelector('.error');

button.addEventListener('click' , function () {
    let email = emailField.value;
    if(validateEmail(email)) {
        response.innerHTML = "Thank You!";
        iconError.classList.remove('active');
        iconError.classList.add('error');
    } else {
        response.innerHTML = "Please provide a valid email";
        iconError.classList.remove('error');
        iconError.classList.add('active');
    }
});

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
