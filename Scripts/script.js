var email = document.getElementById('email');

var senha = document.getElementById('senha');

var submit = document.getElementById('submit');
// var valida_email = document.getElementById('email');

// var valida_senha = document.getElementById('senha');


console.log("Email: " + email);
console.log("Senha: " + senha);
if (! email == 'teste@gmail.com' && !senha == '123', function(){
    submit.style.display = "none";
})

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = '#ccc';
});

senha.addEventListener('focus', ()=>{
    senha.style.borderColor = '#4A5F6A'
});

senha.addEventListener('blur',()=>{
    senha.style.borderColor = '#ccc';
});