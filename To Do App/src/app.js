const inputBox = document.getElementById('tasks__input');
const taskBox = document.getElementById('tasks__');


const addTask = () => {
    let inputValue = inputBox.value.charAt(0).toUpperCase() + inputBox.value.slice(1);
    if(inputBox.value === ''){
        alert("You must write a task!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputValue;
        taskBox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

taskBox.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem('data', taskBox.innerHTML);
}
const retrieveData = () => {
    taskBox.innerHTML = localStorage.getItem('data');
}
retrieveData();

