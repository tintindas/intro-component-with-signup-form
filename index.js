function validateEmail(email) {

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.getElementById('form');

const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const inputs = [fName, lName, password];

form.addEventListener('submit', e => {
  e.preventDefault();

  inputs.forEach(item => {

    if(!item.value) {

      item.classList.add('error');

      const elements = document.getElementsByClassName(item.id);

      for(let i=0; i<2; i++) {
        elements[i].classList.remove('hidden');
      }
    }

    else {
      item.classList.remove('error');

      const elements = document.getElementsByClassName(item.id);

      for(let i=0; i<2; i++) {
        elements[i].classList.add('hidden');
      }
    }

    if(!validateEmail(email.value)){

      email.classList.add('error');

      const elements = document.getElementsByClassName(email.id);

      for(let i=0; i<2; i++) {
        elements[i].classList.remove('hidden');
      }
    }

    else{
      email.classList.remove('error');

      const elements = document.getElementsByClassName(email.id);

      for(let i=0; i<2; i++) {
        elements[i].classList.add('hidden');
      }
    }

  });
})
