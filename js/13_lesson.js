// Події

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', onClick)

function onClick(event) {
    console.log(event);
}

// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Додали слухача подій на цільову кнопку');
//     targetBtn.addEventListener('click', ()=>{
//         console.log('Відбулась подія клік');
//     })
// });

// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Зняли слухача з цільвої кнопки');
//     targetBtn.addEventListener('click', ()=>{
//         console.log('Відбулась подія клік');
//     })
// });

function oneClick() {
    console.log('Відбулась подія клік');
};





// Форми
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    // const formData = new FormData()
    // console.log(FormData);
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const subscription = formElements.subscription.value;

    const formData = [
        email,
        password,
        subscription,
    ]
    console.log(formData);
}