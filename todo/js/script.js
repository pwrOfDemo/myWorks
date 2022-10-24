'use strict'

let btn = document.querySelector('.todo__button');
let todoCnt = document.querySelector('.todo__box');
let clearAll = document.querySelector('.clear-all');

btn.addEventListener('click', () => {
  
  let myFeel = new Date();
  let now = (`${myFeel.getFullYear()}, 
  ${myFeel.getMonth()}, 
  ${myFeel.getDay()}, 
  ${myFeel.getHours()}:
  ${myFeel.getMinutes()}`);
  
  

  let inputText = document.querySelector('.todo__input').value;
  

  let creatorList = document.createElement('li');
  creatorList.className = 'tasks-list';

  let creatorDiv = document.createElement('div');
  creatorDiv.className = 'tasks-list__cnt';

  let creatorDivFlex = document.createElement('div');
  creatorDivFlex.className = 'tasks-list__info';

  let creatorDivDateClear = document.createElement('div');
  creatorDivDateClear.className = 'tasks-list__date';

  let taskListCheckBox = document.createElement('input');
  taskListCheckBox.className = 'tasks-list__checkbox';
  taskListCheckBox.setAttribute('type', 'checkbox');

  let taskListText = document.createElement('p');
  taskListText.className = 'tasks-list__text';
  taskListText.textContent = `${inputText}`;

  let taskListDate = document.createElement('p');
  taskListDate.className = 'tasks-list__time';
  taskListDate.textContent = `${now}`;

  let taskListDelete = document.createElement('p');
  taskListDelete.className = 'tasks-list__delete';
  taskListDelete.textContent = '+';

  taskListDelete.addEventListener('click', () => {
    creatorDiv.parentNode.remove();
  });
  
  taskListCheckBox.addEventListener('click', () => {
    taskListText.classList.toggle('opapa');
    taskListDate.classList.toggle('opapa');
    taskListDelete.classList.toggle('opapa');

    taskListDelete.addEventListener('mouseover', () => {
      taskListDelete.classList.toggle('opapa');
    });
    taskListDelete.addEventListener('mouseout', () => {
      taskListDelete.classList.toggle('opapa');
    });
    
    taskListCheckBox.addEventListener('mouseover', () => {
      taskListCheckBox.classList.toggle('opapa');
    });
    taskListCheckBox.addEventListener('mouseout', () => {
      taskListCheckBox.classList.toggle('opapa');
    });
  });
  

  creatorList.appendChild(creatorDiv);
  creatorDiv.appendChild(creatorDivFlex);
  creatorDiv.appendChild(creatorDivDateClear);

  creatorDivFlex.appendChild(taskListCheckBox);
  creatorDivFlex.appendChild(taskListText);

  creatorDivDateClear.appendChild(taskListDate);
  creatorDivDateClear.appendChild(taskListDelete);

  todoCnt.append(creatorList);

});

let spoiler = document.querySelector('.my-tasks-box');
let arrow = document.querySelector('.my-tasks__img');


  spoiler.addEventListener('click', () => {
    todoCnt.classList.toggle('disp-none');
    arrow.classList.toggle('rot');
  });

  clearAll.addEventListener('click', () => {
    todoCnt.innerHTML = '';
    todoCnt.classList = 'disp-none my-tasks__text';
    arrow.classList = 'rot my-tasks__img';
  });
  
