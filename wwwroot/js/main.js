import { save } from "./Firebase.js"

const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const mail = taskForm('user');
    const pass = taskForm('pass');

    save("hola", "hola");
});


