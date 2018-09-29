import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class currentlyReading extends Component {
  state = {books: []}
  componentDidMount() {BooksAPI.getAll().then((book)=>{this.setState({books: book})})}


render() {
return(

  <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.books.map(books =>
                        <li key={books.id}>
                                                <div className="book">
                                                  <div className="book-top">
                                                    <div className="book-cover">
                                      <img src={books.imageLinks.thumbnail}></img>
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
</div>
</div>
)
}}
 export default currentlyReading
