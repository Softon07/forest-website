const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#msg');
const sendBtn = document.querySelector('.send-btn');
const closeBtn = document.querySelector('.close-btn');
const popup = document.querySelector('.contact__popup');


const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');
    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
}

const checkLength = (input, min) => {
    let thisInput = input.previousElementSibling.innerText.slice(0, -1);

    if (input.value.length < min) {
        showError(input, `${thisInput} składa się z min. ${min} znaków.`);
    }
}

const clearForm = () => {
    [inputName, inputEmail, inputMessage].forEach(el => {
        el.value = '';
    })
}

const checkEmail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email);
    } else {
        showError(email, 'E-mail jest niepoprawny');
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.contact__form-box');
    let erroNumber = 0;
    
    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            erroNumber++;
        }
    })

    if (erroNumber === 0) {
        clearForm();
        popup.classList.add('show-popup');
    }

    console.log(erroNumber);

}

const closeModal = () => {
    popup.classList.remove('show-popup')
}

const sendForm = e => {
    e.preventDefault();

    checkForm([inputName, inputEmail, inputMessage]);
    checkLength(inputName, 3);
    checkLength(inputEmail, 5);
    checkEmail(inputEmail);
    checkErrors();
}

sendBtn.addEventListener('click', sendForm);
closeBtn.addEventListener('click', closeModal);