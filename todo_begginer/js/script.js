'use strict'
//-----------------------------------//

let myFeel = new Date();
let now = (`${myFeel.getFullYear()}, ${myFeel.getMonth()}, ${myFeel.getDay()}, ${myFeel.getHours()}:${myFeel.getMinutes()}`);
let box = document.querySelector('.list-box');
let clearBtn = document.querySelector(".clear");
let btn = document.getElementById('btn');
let text = document.getElementById('inptext');
btn.addEventListener('click', ()=>{
   let list = document.createElement('li');
   let del = document.createElement('div');
   del.classList.add('del')
   del.innerHTML = '+';
   
   list.classList.add("task");
   list.innerHTML = text.value;
   list.appendChild(del);
   box.appendChild(list);
})


box.addEventListener('click', (e)=>{
   if(e.target.classList.contains('del')){
      e.target.closest('.task').remove()
   }
})
clearBtn.addEventListener('click', ()=>{
   box.innerHTML = '';
})