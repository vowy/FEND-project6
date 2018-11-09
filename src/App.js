import React from 'react'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
state=({books: []})
componentDidMount() {
  BooksAPI.getAll().then((books => {
       this.setState ({books:books})
     }
   )
 )
}
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
  }

  render() {
    return (
      <div className="app">


       <Route exact path="/" render={() =>(
       <BookList updateBook = {this.updateBook} books = {this.state.books} />
       )}/>
	  <Route exact path="/searchbooks" render={() =>(
      <SearchBooks updateBook ={ this.updateBook} books = {this.state.books}/>
      )}/>


      </div>
    )
  }
}

export default BooksApp
