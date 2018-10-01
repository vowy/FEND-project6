import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {



  render() {
return(
  <li key = {this.props.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover">
  <img src={this.props.imageLinks.smallThumbnail}></img>
  </div>
  <div className="book-shelf-changer">
    <select value = {this.props.book.shelf || "none"} onChange={(e) => {this.props.updateBook(this.props.book, e.target.value)}}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading" >Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
    </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
          </div>

        </li>
      )}
    }
export default Book
