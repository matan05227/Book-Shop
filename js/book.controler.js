'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
     const elBookList = document.querySelector('tbody')
    const Books = getBooks()

    const strHtmls = Books.map(Book => {
        return `
            <tr>
                <td>${Book.title}</td>
                <td>${Book.price}</td>
                <td>
                    <button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        `
    })

    elBookList.innerHTML = strHtmls.join('')
}