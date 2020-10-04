// // const element = document.querySelector('some_id');
// const element = document.getElementById('some-id');
// let inputEl = document.getElementById('input')

// // element.style.color = 'red';
// // element.innerText = 'some';

// // const newElement =  document.createElement('p');
// // newElement.textContent = 'text';
// // element.appendChild(newElement);

// // element.innerHTML+= `<span>word<span>`;


// // function () {} ; () => {}
// element.addEventListener('click', ()  => {
//     alert('Hello');
// });

// inputEl.addEventListener('keyup', (e) =>{
//     console.log(e);
//     console.log('hellooo')
// })



// localStorage

// // localStorage.setItem('score', '3');
// const result = document.getElementById("result");
// let score = localStorage.getItem('score');
// result.innerHTML = score;
// function cong() {
//     score= Number(result.innerHTML)+1;
//     localStorage.setItem('score',score);
//     result.innerHTML=score;
// }
// function tru() {
//     score = Number(result.innerHTML)-1;
//     localStorage.setItem('score',score);
//     result.innerHTML=score;
// }

//https://pokeapi.co/api/v2/pokemon/1
// const image= document.getElementsByClassName('img');
const pokemonAdd = document.getElementById('pokemon-add');
const input = document.getElementById('input');

async function getPokemInfo(pokeId) {
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`); 
    const pokeData = await respone.json();
    console.log(pokeData);
    const pokeName = pokeData.species.name;
    console.log(pokeName);
    const pokeContain = document.getElementById('pokemon-container');
    pokeContain.innerHTML+=
    `<div class="one-pokemon">
        <div class="pokemon-name">${pokeName}</div>
        <img src=${pokeData.sprites.front_default} alt="a">
    </div>`;
}
button.addEventListener('click',() => {
    getPokemInfo(Number(input.value));
});
    