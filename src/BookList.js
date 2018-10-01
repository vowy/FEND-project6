import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Shelf from './Shelf.js'

import * as BooksAPI from './BooksAPI.js'


class BookList extends Component {
  constructor(props) {
  super(props);
  this.state = {
    books: []
  }
}

  componentDidMount() {
    BooksAPI.getAll().then((books => {
         this.setState ({books:books})
       }
     )
   )
  }

render() {
  return(
<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
<Shelf updateBook ={this.props.updateBook} name ="Currently Reading" books = {this.state.books.filter(b => b.shelf === "currentlyReading")} />
<Shelf updateBook ={this.props.updateBook} name ="Want To Read" books = {this.state.books.filter(b => b.shelf === "wantToRead")} />
<Shelf updateBook ={this.props.updateBook} name ="Read" books = {this.state.books.filter(b => b.shelf === "read")} />


            <div className="open-search">
              <Link to="/searchbooks">Add a book</Link>
            </div>
          </div>
)
}
}

export default BookList
