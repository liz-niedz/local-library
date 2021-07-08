function findAccountById(accounts, id) {
  return accounts.find((account)=> 
  account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => 
  a.name.last < b.name.last ? -1 : 1)
}

function getTotalNumberOfBorrows(account, books) {
return  borrow = books.reduce((acc, book)=> {
  acc += book.borrows.filter((item)=> item.id === account.id).length
  return acc 
}, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  let accBooks = []
books.forEach((book=> {
  let borrowArr = book.borrows
  if(borrowArr.find((borrow)=> 
  borrow.id === account.id && borrow.returned === false)) {
    accBooks.push(book)
  }
})
)
accBooks.forEach((book)=> {
  let author = authors.find((author)=> author.id === book.authorId)
  book.author = author
})
return accBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
