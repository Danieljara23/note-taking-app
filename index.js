const notesList = [
  {
    date: "23/11/2023",
    title: "My super note",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
  {
    date: "04/04/2024",
    title: "Note number 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
  {
    date: "24/05/2023",
    title: "My university",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis dignissimos sequi assumenda velit commodi, numquam odit aliquam blanditiis"
  },
]

function getNoteHtml(note){
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
        <button><img src="./assets/edit-icon.png" alt="Edit" srcset=""></button>
        <button id="delete-button"><img src="./assets/delete-icon.png" alt="Delete" srcset=""></button>
      </div>
    </article>
  `
}


const notesElement = document.querySelector(".notes");


let notesHtml = ""
notesList.forEach((element) => {
  notesHtml += getNoteHtml(element)
})

// const notesHtml = notesList.map((element) => {
//   return getNoteHtml(element)
// }).join("")

// console.log(notesHtml)


notesElement.innerHTML = notesHtml



const newNoteButton = document.getElementById("new-note-button")

newNoteButton.addEventListener("click", function(e){
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

  console.log(notesList)

  
let notesHtml = ""
notesList.forEach((element) => {
  notesHtml += getNoteHtml(element)
})


notesElement.innerHTML = notesHtml
  

})