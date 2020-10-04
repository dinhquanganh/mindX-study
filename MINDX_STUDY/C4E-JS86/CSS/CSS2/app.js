const btn = document.getElementById("btn");
const input = document.getElementById('input');

// removeEventListener
// console.log(btn,input);

// btn.onclick = function() {
//     console.log('hello qa');
//     alert('aa');
// }

function add() {
    let value= input.value;
    let li = `<li>
    ${value} <button class='delete'>X</button>
    </li>`;
    list.innerHTML +=li;

    // let li= document.createElement('li');
    // li.innerText= value;
    // list.appendChild(li);
    
    // let but= document.createElement('button');
    // but.innerText= 'delete';
    // but.classList.add('delete');
    // list.appendChild(but);
    
}
let list= document.getElementById('todo-list');
btn.addEventListener('click', add );

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
// contains dung trong class de check xem co dung k;

// .................................................................................................................>
// const dbEmail = "wuangah@gmail.com";
// const dbPassword = "123456789";
// const error= document.getElementById('error');
// const mainForm = document.getElementById('main-form');
// mainForm.addEventListener('submit', function(e) {
//     e.preventDefault();     
//     const email = mainForm.email.value;
//     const password = mainForm.password.value;
//     if (email=="" || password=="") {
//         error.innerHTML= 'Not empty';
//     }else if (email!==dbEmail || password!==dbPassword) {
//         error.innerHTML= 'Email or password invalid';
//     }else {
//         error.innerHTML='';
//         alert('Login successfully');
//     }
// })










