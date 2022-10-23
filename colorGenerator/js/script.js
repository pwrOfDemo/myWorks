'use strict'
//! start atributes
let btn = document.getElementById('btne');
let divan = document.querySelector('.divan');

btn.addEventListener('click', function() {

  let hexGenerato = Math.floor(Math.random()*16777215).toString(16);
  if (hexGenerato.length < 6) {
    hexGenerato = Math.floor(Math.random()*16777215).toString(16);
  }
  document.body.style.backgroundColor = `#${hexGenerato}`;
  btn.textContent = document.body.style.backgroundColor;
  //*Creating list to store generated colors
  let li = document.createElement('li');
  li.style.backgroundColor= `#${hexGenerato}`;
  li.className = 'listerin';
  divan.appendChild(li);
  //*
  li.addEventListener('click', () => {
    
    document.body.style.backgroundColor = li.style.backgroundColor;
    btn.textContent = li.style.backgroundColor;
  });

});

const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-body");
}

/*function colorGenerate() {
  let hexGenerator = '';
  let hexColletor = '';
  for ( let i = 0; i <= 5; i++) {
    hexGenerator = Math.floor(Math.random() * 10)
    if (hexGenerator == '0') {
      i--
      continue;
    }
    hexColletor += hexGenerator;
  };
    document.body.style.backgroundColor = `#${hexColletor}`;
    btn.style.backgroundColor = `#${hexColletor}`;
};
btn.addEventListener( 'click', colorGenerate() )*/
