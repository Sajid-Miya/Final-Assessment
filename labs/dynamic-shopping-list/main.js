const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function(){
  let item = input.value;
  input.value = ''; 

    const li = document.createElement('li');
    const span = document.createElement('span');
    const new_button = document.createElement('button');

    li.appendChild(span);
    li.appendChild(new_button);
    span.textContent = item;
    new_button.textContent = 'Delete';

    list.appendChild(li);

    new_button.onclick = function() {
        list.removeChild(li);

    }

    input.focus();



}