import { save } from "./Firebase.js"
const singupform = document.querySelector('#singup');
singupform.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = document.querySelector('#user').value;
    const pass = document.querySelector('#pass').value;
    
    //console.log(mail, pass);
    save(mail, pass);
    singupform.reset();
});
/*
const taskForm = document.getElementById("singup-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = taskForm('user');
    const pass = taskForm('pass');

    save(mail, pass);
});

*/

