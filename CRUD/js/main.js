//import  { testeok } from "./teste.js";

import { create, read } from "./crud.js";

const myForm = document.querySelector('#form');


myForm.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const post = evento.target.elements['post'];
    
    // const timeline = document.querySelector('#timeline');
    // timeline.insertAdjacentHTML('afterbegin', `<li class="list">${post.value}</li>`);

    create(post.value);

    post.value = '';

});

const list = document.querySelector('#list');

list.addEventListener('click', (evento)=>{
    evento.preventDefault();
    console.log(read());
})



