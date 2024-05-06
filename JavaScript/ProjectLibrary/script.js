const body = document.querySelector("body")


const book = {
    title: "text",
    author: "text",
    pages: "number",
    isRead: "checkbox",
    // info = (description) => {return description;}
    //image
};

const MyLibrary = [];
let currentBook = [];
let v = 1;

function addBookToLibrary(book) {
    let container = document.createElement("div")
    container.setAttribute("style", "border: 2px solid black; border-radius: 10px; padding: 20px; display: flex; flex-wrap: wrap; width: 20%; height: 40%")

    let title = document.createElement("h3")
    title.textContent = book[0];

    container.appendChild(title)
    body.appendChild(container)
}

document.querySelector('.addbook').addEventListener("click", () => {
    addForm()
})

function addForm() {
    const dialog = document.createElement("dialog")
    dialog.setAttribute("open", "")
    const form = document.createElement("form")

    for (const key in book) {
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
    button.setAttribute("type", "submit")

    form.appendChild(button)
    dialog.appendChild(form)
    body.appendChild(dialog)

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let i = 0
        for (const key in book) {
            currentBook[i] = document.getElementById(`${key}`)
            if (key === 'isRead') {
                currentBook[i] = currentBook[i].checked
            } else {
                currentBook[i] = currentBook[i].value
            }
            i++
        }
        MyLibrary.push(currentBook)
        dialog.close()

        addBookToLibrary(currentBook)
    })
    v++;
}
