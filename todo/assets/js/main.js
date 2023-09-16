const inputEl = document.querySelector('.inputEl')
const buttonEl = document.querySelector('.buttonEl')
const listsEl = document.querySelector('.lists')

const notes = [
    {
        title: 'Кто ничего не делает получит два',
        action: false,
    },
    {
        title: 'Мы делаем todoList',
        action: false,
    },
    {
        title: 'Вторая заметка',
        action: true,
    },
]

function arrayNote(){

    // for(let note of notes){
    //     listsEl.insertAdjacentHTML('beforeend', 
    //     getNote(note)
    //     )
    // }

    listsEl.innerHTML = ''
    for (let i = 0; i < notes.length; i++){
        listsEl.insertAdjacentHTML('beforeend', 
        getNote(notes[i], i)
        )
    }

}

arrayNote()

function getNote(note, index){
    return `
    <li class="list ${note.action ? 'active' : ''}">

        <p>${note.title}</p>

        <div class="actions">

            <button class="done ${note.action ? 'doneActive' : ''}" data-index=${index} data-type="toggle">Выполнить</button>
            <button class="remove" data-index=${index} data-type="remove">Удалить</button>

        </div>

    </li>
    `
}

buttonEl.onclick = function () {

    if(inputEl.value.length === 0){
        return
    }

    const newNote = {
        title: inputEl.value,
        action: false,
    }

    // listsEl.insertAdjacentHTML('beforeend', 
    // getNote(newNote)
    // )

    notes.push(newNote)
    arrayNote()

    inputEl.value = ''

    event.preventDefault()
}

listsEl.onclick = function (event) {
    if (event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        
        if( type === 'toggle') {
            notes[index].action = !notes[index].action
        } else if ( type === 'remove'){
            notes.splice(index, 1)
        }

        arrayNote()
    }
}