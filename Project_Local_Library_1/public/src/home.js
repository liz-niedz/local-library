function getTotalBooksCount(books) {
  total = 0;
  for(let id in books) {
    if(id) {
      total += 1
    }
  }
  return total
}

function getTotalAccountsCount(accounts) {
  total = 0;
  for(let id in accounts) {
    if(id) {
      total += 1
    }
  }
  return total
}

function getBooksBorrowedCount(books) {
  return  books.reduce((acc, book)=> {
    acc += book.borrows.filter((item)=> item.returned === false).length
    return acc 
  }, 0)

}

function getMostCommonGenres(books) {
 const onlyGenres = books.reduce((acc, book)=> {
  const { genre } = book
   if(!acc[genre]) {
   acc[genre] =  { name: genre, count: 1}
   }
   else acc[genre].count++
return acc
 }, {})
 return Object.values(onlyGenres).sort((a, b)=> b.count - a.count).splice(0, 5)

}

function getMostPopularBooks(books) { 
  let booksCount = [] 
  books.forEach((book)=> { booksCount.push({name: book.title, count: book.borrows.length})
 }) 
 booksCount.sort((bookA, bookB)=> bookB.count - bookA.count) 
 booksCount.splice(5) 
 return booksCount
  
}

function getMostPopularAuthors(books, authors) {
  let authorCount = []
  authors.forEach((author)=> {
    let newAuthor = { name: author.name.first + " " + author.name.last, count: 0}
  books.forEach((book)=> {
    if(book.authorId === author.id) {
      newAuthor.count += book.borrows.length
    }
    })
    authorCount.push(newAuthor)
  })
  return authorCount.sort((a, b)=> b.count - a.count).splice(0, 5)
}
 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
