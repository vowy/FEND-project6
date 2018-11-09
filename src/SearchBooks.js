import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book.js'
import * as BookUtils from './BookUtils'
import * as BooksAPI from './BooksAPI.js'

class SearchBooks extends Component {
      state = {books: [], query: ''}
componentWillReceiveProps = (props) => {
  this.props = props;
  let newList = BookUtils.mergeSearch(this.props.books, this.state.books);
  this.setState({books: newList});
}

searchBooks = (query) => {

       if (!query || (query === '')) {
           this.setState({
           books: []
       })}
       else {
       BooksAPI.search(query).then((book) => {
         let newList = [];
           if(!book.length) {
               this.setState({
               books: []
           })
       }
       else {
         newList = BookUtils.mergeSearch(this.props.books, book);}
           this.setState({books: newList})
       })
       }
   }

updateQuery(query) {
  this.setState({query: query});
  this.searchBooks(query);
}

clearQuery = () => {
      this.setState({query:''})
    }

render() {
  return(

<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
					type="text"
					placeholder="Search by title or author"
					value={this.state.query}
					onChange={(event) => {this.updateQuery(event.target.value)}}
						/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{this.state.books && this.state.books.map(book =>
  <li key={book.id}>
  <Book updateBook = {this.props.updateBook} book={book} />
</li>)
}
</ol>
</div>
</div>
)
}
}
export default SearchBooks
