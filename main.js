const form = document.querySelector('.js-form')

form.onsubmit = (e) => {
    e.preventDefault();

    const formInputs = document.querySelectorAll('input')
    const importantInputs = document.querySelectorAll('.important')
    let x = 0;
    let data = {};
    for (let i = 0; i < formInputs.length; i++){
        data[formInputs[i].name] = formInputs[i].value
        if (formInputs[i].value ===""){
            x++
        }
    }

    for (let j = 0; j < importantInputs.length; j++){
        if (importantInputs[j].value === ""){
            importantInputs[j].classList.add('error')
        }
        importantInputs[j].onchange = () => {
            importantInputs[j].classList.remove('error')
        }
    }


    if (x > 0) {
        alert ('Заполните все поля')
    } else{
        window.location.href = "form2.html"
    }

    localStorage.setItem("data", JSON.stringify(data));
}
















/*
let form = document.querySelector('form'),
    surname = document.querySelector('#surname'),
    name = document.querySelector('#name'),
    idNumber = document.querySelector('#idNumber'),
    inn = document.querySelector('#inn'),
    date = document.querySelector('#date'),
    formInputs = document.querySelectorAll('input')


form.onsubmit = (event) => {
     event.preventDefault();

    formInputs.forEach((input) => {
            if (input.value === ""){
              input.classList.add('error')
                return false
            }
            input.onchange = () => {
                input.classList.remove('error')
                window.location.href = "form2.html"
            }

    })

    let formData = {
        surname: surname.value,
        name: name.value,
        idNumber: idNumber.value,
        inn: inn.value,
        date: date.value
    };

    localStorage.setItem("data", JSON.stringify(formData));

}
*/

