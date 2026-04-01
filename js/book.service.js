'use strict'

const STORAGE_KEY = 'book'

var gBooks
_createBooks()

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)

    _saveBooks()
}

function _saveBooks() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function _createBooks() {
    gBooks = loadFromStorage(STORAGE_KEY)
    if (gBooks && gBooks.length > 0) return

    gBooks = [
        {
            id: 'ma455',
            title: 'The adventures of Lori Ipsi',
            price: 120,
        },

        {
            id: 'ta899',
            title: 'World Atlas',
            price: 300,
        },

        {
            id: 'nc777',
            title: 'Zobra the Greek',
            price: 87,
        }

    ]

    _saveBooks()
}