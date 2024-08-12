//refering elements

const bootcampForm = document.getElementById('bootcamp-form');
const password = document.getElementById("user-pwd");
const confirm_password = document.getElementById("confirm-pwd");


bootcampForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})

//function validateForm() {
    
//}

const validateForm = () => {
    let pwd = password.value;
    let confirmPwd = confirm_password.value;

    if(pwd.length < 8) {
        alert("Password Should Be 8 chars");
    }

    if (pwd !== confirmPwd) {
        alert("Password Should Not Match");
    }
};