
let addToDo = document.getElementById('addToDo')

function addtolist (){
    let taskText = document.getElementById('addText') as HTMLFormElement;
    let addText = taskText?.value;

    if (addText !== '') {
        let li = document.createElement('li')
        li.textContent = addText;

        li.addEventListener('click', () => {
            list?.removeChild(li);
        });

        let list = document.getElementById('list');
        list?.appendChild(li);

        taskText.value ='';
    }
}

addToDo?.addEventListener('click',function(e){
    e.preventDefault();
    addtolist();
})
