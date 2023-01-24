const nome = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const formControl = document.querySelectorAll('.form-control')


//função para validar o formulário
let form = document.querySelector('form')
form.addEventListener('submit', function (validar){
    validar.preventDefault();
        checkInput();
})

function checkInput(){
    const nameValue = nome.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(nameValue === ''){
        formControl[0].classList.add('error') 
    }else{
        formControl[0].classList.add('success')
        formControl[0].classList.remove('error')
    }
    if(lastNameValue === ''){
        formControl[1].classList.add('error') 
    }else{
        formControl[1].classList.add('success')
        formControl[1].classList.remove('error')
    }
    if(emailValue === ''){
        formControl[2].classList.add('error') 
    }
    else if(!checkEmail(emailValue)){
        formControl[2].classList.add('error') 
    }
    else{
        formControl[2].classList.add('success')
        formControl[2].classList.remove('error')
    }
    if(passwordValue.length < 8  ){
        formControl[3].classList.add('error') 
    }else{
        formControl[3].classList.add('success')
        formControl[3].classList.remove('error')
    }
//expressão regular
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
    }
}
//função de aparecer o personalizado
let genPenson = document.querySelector('#perso')
let personalizado = document.querySelector('.personalizado')
genPenson.addEventListener('click', openDiv)
function openDiv(){
   
  if(personalizado.style.display == 'block' &&
   personalizado.style.visibility == 'visible'){
    personalizado.style.display = 'none';
   personalizado.style.visibility = 'hidden'
   }else{
    personalizado.style.display = 'block';
   personalizado.style.visibility = 'visible';
   }
    
   
}