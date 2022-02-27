const pw = document.querySelector('#password');
const confirmPw = document.querySelector('#password-confirm');
const pwLabel = document.querySelector('label[for="password"]');

pw.addEventListener('change', () => {
    confirmPw.setAttribute("pattern", pw.value);
})

confirmPw.addEventListener('input', () => {
    if(confirmPw.value === confirmPw.getAttribute("pattern")){
        makeValid();
    }
    else if(!pw.classList.contains("error")){
        makeInvalid();
    }
})
function makeValid(){
    pw.classList.remove('error');
    confirmPw.classList.remove('error');
    pwLabel.classList.remove('error-label');
}
function makeInvalid(){
    pw.classList.add('error');
    confirmPw.classList.add('error');
    pwLabel.classList.add('error-label');
}