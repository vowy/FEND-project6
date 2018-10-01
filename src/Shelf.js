import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends Component {

  render() {
    let addBooks = (book) => {
      return (<Book updateBook = {this.props.updateBook} book={book} key={book.id} {...book} />)
    }
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {this.props.name} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {this.props.books.map(addBooks)}
    </ol>
    </div>
    </div>

)}
}

export default Shelf
