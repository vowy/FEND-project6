import React, {Component} from 'react'

class Book extends Component {
  state = {
    shelfSelection: this.props.book.shelf || "none"
  }

  componentWillReceiveProps = (props) => {
    this.props = props;
    this.setState({shelfSelection: this.props.book.shelf})
  }

  render() {
return(
  <li key = {this.props.book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover">
<img alt= {this.props.book.title} src={this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : ''}></img>
  </div>
  <div className="book-shelf-changer">
    <select value = {this.state.shelfSelection} onChange={(e) => {this.props.updateBook(this.props.book, e.target.value)}}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading" >Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
    </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>

        </li>
      )}
    }
export default Book
