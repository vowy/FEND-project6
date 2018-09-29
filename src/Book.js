import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI.js'
import {Link} from "react-router-dom"

class Book extends Component {
  state = {books: []}
  componentDidMount() {BooksAPI.getAll().then((book)=>{this.setState({books: book})})}

render() {
  return (
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
}

export default Book
