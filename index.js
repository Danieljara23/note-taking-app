let notesList = [
  {
    date: "2023-11-23",
    title: "My super note",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
  {
    date: "2024-04-04",
    title: "Note number 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
  {
    date: "2023-05-24",
    title: "My university",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
]

function getNoteHtml(note) {
  return `
    <article class="note">
      <div class="note__header">
        <p class="note__eyebrow">${note.date}</p>
        <h3>${note.title}</h3>
        <hr>
      </div>
      <div class="note__body">
        <p class="note__description">
          ${note.description}
        </p>
      </div>
      <div class="note__footer">
        <button class="edit-button"><img src="./assets/edit-icon.png" alt="Edit" srcset=""></button>
        <button class="delete-button"><img src="./assets/delete-icon.png" alt="Delete" srcset=""></button>
      </div>
    </article>
  `
}

function renderNotes(notes){
  const notesElement = document.querySelector(".notes");
  let notesHtml = ""
  notes.forEach((element) => {
    notesHtml += getNoteHtml(element)
  })
  notesElement.innerHTML = notesHtml

  addDeleteAction()
  addEditAction()
}

function addDeleteAction(){
  const deleteButtons = document.querySelectorAll(".delete-button")
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener("click", function(e){
      // console.log(e)
      const buttonElement = e.target;
  
      const parentNote = buttonElement.closest(".note")
      console.log(parentNote)
  
      const notes = document.querySelector(".notes")
      const noteIndex = Array.from(notes.children).indexOf(parentNote)
  
      notesList = notesList.filter((element, index) => index != noteIndex)
  
      renderNotes(notesList)
  
    })
  })
}

document.querySelector

function addEditAction(){
  const editButtons = document.querySelectorAll(".edit-button")

  editButtons.forEach(editButton => {
    editButton.addEventListener("click", function(e){
      const buttonElement = e.target;
      const parentNote = buttonElement.closest(".note")

      const notes = document.querySelector(".notes")
      const noteIndex = Array.from(notes.children).indexOf(parentNote)
  
      // Open Modal
      document.querySelector(".modal").classList.add("is-active")
  
      const dateElement = parentNote.querySelector(".note__eyebrow")
      const titleElement = parentNote.querySelector("h3")
      const descriptionElement = parentNote.querySelector(".note__description")


      const dateInput = document.getElementById("date-input")
      const titleInput = document.getElementById("title-input")
      const descriptionInput = document.getElementById("description-input")

      dateInput.value = dateElement.innerText
      titleInput.value = titleElement.innerText
      descriptionInput.value = descriptionElement.innerText

      editNoteButton.setAttribute("data-selected-note", noteIndex)
    })
  })

  const editNoteButton = document.querySelector("#edit-note-button")

  editNoteButton.addEventListener("click", (e)=> {
    e.preventDefault();
    const dateInput = document.getElementById("date-input")
    const titleInput = document.getElementById("title-input")
    const descriptionInput = document.getElementById("description-input")

    const noteIndex = editNoteButton.getAttribute("data-selected-note")
    const selectedNote = document.querySelector(`.note:nth-child(${Number(noteIndex) + 1})`)

    const dateElement = selectedNote.querySelector(".note__eyebrow")
    const titleElement = selectedNote.querySelector("h3")
    const descriptionElement = selectedNote.querySelector(".note__description")

    dateElement.innerText = dateInput.value
    titleElement.innerText = titleInput.value
    descriptionElement.innerText = descriptionInput.value

    document.querySelector(".modal").classList.remove("is-active")

  })
}

renderNotes(notesList)


const newNoteButton = document.getElementById("new-note-button")

newNoteButton.addEventListener("click", function (e) {
  e.preventDefault()
  console.log("Hola amigos")

  const dateInput = document.getElementById("date-input")
  const titleInput = document.getElementById("title-input")
  const descriptionInput = document.getElementById("description-input")

  const newNote = {
    date: dateInput.value,
    title: titleInput.value,
    description: descriptionInput.value
  }

  notesList.push(newNote)

  renderNotes(notesList)
})







// console.log(deleteButtons)