import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

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
<Book />
)}
			</ol>
            </div>
          </div>
</div>
</div>
)
}}
 export default currentlyReading
