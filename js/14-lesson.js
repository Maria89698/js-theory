const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };

window.addEventListener('keypress', onKeypress)

 function onKeypress(event){
  console.log('event.code: ', event.code);
  console.log('event.key: ', event.key);

  refs.output.textContent += event.key;

 };

refs.clearBtn.addEventListener('click', ()=>{
    refs.output.textContent = "";
})