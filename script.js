
let quvi = document.querySelector('#taskInput');
let zero = document.querySelector('#list');
let Btn = document.querySelector('#addBtn');

Btn.addEventListener('ckick' , function(){
  console.log('клик');
  let li = document.createElement('li');
  li.className = 'item';
  li.textContent = inp.value;
  zero.append(li);
  quvi.value = '';

  let lep = document.createElement('div');
  lep.append(li);
  lep.className = 'item__btns'

  let god = document.createElement('i');
  god.className = 'fa-regular fa-square check';

  add.addEventListener('click' , function(){
    this.classList.toggle('done');  
  }) 

  let bi = document.createElement('li');
  bi.className = 'fa-solid fa-trash-can';
  bi.append(lep);

  bi.addEventListener('click' , function(){
    bi.parentNode.removeChild('fa-solid fa-trash-can')
  })
})