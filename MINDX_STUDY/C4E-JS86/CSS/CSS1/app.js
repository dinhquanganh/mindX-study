// DOM- DOCUMENT OBJECT MODEL
// 1. Query HTML

// let app = document.getElementById("app");
// console.log(app);

// let titleList = document.getElementsByClassName("title");
// console.log(titleList);
// console.log(titleList[0])

// let h1List = document.getElementsByTagName("h1");
// console.log(h1List)

// const app = document.querySelector('#app');
// console.log(app);

// const h1 = document.querySelector('title')

// const app= document.getElementById("app");
// console.dir(app);

// //properties
// // innerHTML, inner Text, textContent

// console.log(app.innerText);
// console.log(app.textContent);
// console.log(app.innerHTML);

// //style 

// console.log(app.style.color);
// app.style.color="blue";

// //id /class

// console.log(app.id);
// app.classList.add('c3');
// console.log(app.classList);
// app.classList.remove('c3');
// console.log(app.classList);

// call children, parent

// const todoList = document.getElementById('todo-list');
// console.log(todoList);
// console.log(todoList.children);

// const item1 = todoList.children[0].parentElement;
// const item2 = todoList.children[1];
// console.log(item1,item2)

// methods:

//creatElement
//appendChild
//remove()

// const todoList =document.getElementById('todo-list');
// console.log(todoList);

// // add content
// const li = document.createElement("li");
// li.innerText ="Do Home"
// console.log(li);

// // add child a element to parent....
// todoList.appendChild(li);
// console.log(todoList)
// li.remove();

// // event //click
// function onclickEvent() {
//     alert ("Hello World")
// }

// let result=document.getElementById("result");
// console.log(result);

// function cong() {
//     result.innerText=Number(result.innerText)+1;
// }
// function tru() {
//     result.innerText=Number(result.innerText)-1;
// }

let colorRD= document.getElementById("colorRD");
function onclickEvent() {
    let letters = '0123456789ABCDEF'.split('');
    let colors = '#';
    for (var i=0; i<6; i++ ) {
        radomm=Math.random() * letters.length;
        colors += letters[Math.floor(radomm)];
    }
    colorRD.style["background-color"] = colors;
}

