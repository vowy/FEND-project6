import React from 'react'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">


       <Route exact path="/" render={() =>(
       <BookList />
       )}/>
	  <Route exact path="/searchbooks" render={() =>(
      <SearchBooks />
      )}/>


      </div>
    )
  }
}

export default BooksApp
