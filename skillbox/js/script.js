const btn = document.querySelector('button');

checkValidation = (evt) => {
  const email = document.getElementById('mail');

    if (email.validity.typeMismatch) {
      email.setCustomValidity("Введите почту, пожалуйста");
    } else {
      email.setCustomValidity("");
    }

    const name = document.getElementById('name');

    if (name.validity.typeMismatch) {
      name.setCustomValidity("Введите имя, пожалуйста");
    } else {
      name.setCustomValidity("");
    }

    const tel = document.getElementById('tel');

    if (tel.validity.typeMismatch) {
      tel.setCustomValidity("Введите телефон, пожалуйста");
    } else {
      tel.setCustomValidity("");
    }

    const check = document.getElementById('check');


    if(!check.checked) {
      check.setCustomValidity("Подтвердите, что согласны с условиями, пожалуйста");
      check.focus();
    }


}

btn.addEventListener('click', checkValidation);

