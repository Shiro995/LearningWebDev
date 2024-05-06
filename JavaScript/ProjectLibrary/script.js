const book = {
    title: "text",
    author: "text",
    pages: "number",
    isRead: "checkbox",
    // info = (description) => {return description;}
};

const MyLibrary = [];

function displayBooks() {
    for (const key in book) {
        console.table(title + author + pages + isRead)
    }
}

function addBookToLibrary() {

}
const body = document.querySelector("body")
// const form = document.querySelector('form')

// form2 = document.cloneNode()

document.querySelector('.addbook').addEventListener("click", (event) => {
    MyLibrary.push(addForm(event))
})

function addForm(event) {
    const dialog = document.createElement("dialog")
    dialog.setAttribute("open", "")
    const form = document.createElement("form")
    let localbook = book
    for (const key in localbook) {
        const label = document.createElement("label")
        label.setAttribute("for", `${key}`)
        label.textContent = `${key}:`
        const input = document.createElement("input")
        input.setAttribute("type", book[key]) //to be modified
        input.setAttribute("name", `book_${key}`)
        input.setAttribute("id", `${key}`)

        form.appendChild(label)
        form.appendChild(input)
    }

    const button = document.createElement("button")
    // button.setAttribute("type", "button")
    // button.setAttribute("type", "submit")
    button.textContent = "+"
    event.preventDefault();
    form.appendChild(button)
    dialog.appendChild(form)
    body.appendChild(dialog)
    return localbook
}