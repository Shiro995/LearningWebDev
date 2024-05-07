const body = document.querySelector("body")
const bookshelf = document.querySelector(".bookshelf")

const book = {
    title: "text",
    pages: "number",
    author: "text",
    isRead: "checkbox",
    // info = (description) => {return description;}
    // image: "file"
};
let MyLibrary = [];
let currentBook = [];
let v = 1;
let EventListeners = [];
let defaultBook = ["The Default mysteries of Default", "420", "Mo Ke", false]

addBookToLibrary(defaultBook)


document.querySelector('.addbook').addEventListener("click", () => {
    addForm()
})


function createCheckboxEventListener(id) {
    const isRead = document.querySelector(`#isRead${id}`)


    isRead.addEventListener('change', () => {
        if(isRead.checked) {
            MyLibrary[id-1][3] = true
        } else {
            MyLibrary[id-1][3] = false
        }

    })

    // EventListeners.push()

}
function addBookToLibrary(Ebook) {
    let container = document.createElement("div")
    container.setAttribute("class", "book")
    
    // let title = document.createElement("p")
    // title.classList.add("title")
    // title.textContent = book[0];

    // let author = document.createElement("p")
    // author.textContent = book[1]
    let i = 0
    for (const key in book) {

        let element = document.createElement("p")
        element.setAttribute("class", `${key}`)
        element.textContent = Ebook[i]
        i++
        if (key === 'pages' && Ebook[1] !== '')
        element.textContent += " pages"   
        if (key === 'isRead')
        transformCheck(element, Ebook[3])

        container.appendChild(element)
    }

    // let cover = document.createElement("div")
    // cover.setAttribute("class", "cover")
    // container.appendChild(cover)
    
    //cover image goes here
    bookshelf.appendChild(container)
    
    MyLibrary[v-1] = [...Ebook]
    EventListeners.push(createCheckboxEventListener(v))
}

function transformCheck(element, bool) {
    // element.remove()
    let label = document.createElement("label")
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", `isRead${v}`)
    label.textContent = "Read?"

    label.appendChild(checkbox)
    // element.remove()
    element.textContent=""
    element.appendChild(label)
    if(bool === true)
    checkbox.setAttribute("checked", "")

}

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
        dialog.remove()

        addBookToLibrary(currentBook)
    })
    v++;
}
