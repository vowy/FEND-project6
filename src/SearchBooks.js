import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading.js'

import * as BooksAPI from './BooksAPI.js'


class SearchBooks extends Component {
      state = {books: [], query: ''};


 searchBooks = (query) => {

       if (!query || (query === '')) {
           this.setState({
           books: []
       })}
       else {
       BooksAPI.search(query).then((book) => {
           if(!book.length) {
               this.setState({
               books: []
           })
       }
       else {
           this.setState({books: book})

       }
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
{this.state.books.map(books =>
  <li key={this.state.books.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover">
                <img src={this.state.books.imageLinks.thumbnail}></img>
                </div>
                              <div className="book-shelf-changer">
                                <select defaultValue="none">
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>

                                </select>
                              </div>
                            </div>
                            <div className="book-title">{this.state.books.title}</div>
                            <div className="book-authors">{this.state.books.authors}</div>
                          </div>

                        </li>
  )
}
			</ol>
            </div>
          </div>
)
}
}
export default SearchBooks
