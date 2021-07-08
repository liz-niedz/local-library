function findAuthorById(authors, id) {
  return authors.find((author)=> 
  author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => 
  book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
let result = []
  const filter = books.filter((book)=> book.borrows[0].returned === false)
  const newArr = books.filter((book)=> book.borrows[0].returned === true)
result.push(filter, newArr)
return result
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book
  const borrowers = borrows.map(({ id, returned })=> {
    const account = accounts.find(account => account.id === id)
    return { ...account, returned, }
  })
  return borrowers.splice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
