import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Book from './Components/Book';
import Top10 from './Components/Top10';
import Favorites from './Components/Favorites';

class App extends Component {
  constructor(){
    super();

    this.state = {
      input: '',
      arrBook: false,

    }
  }
  handleChange(value){
    this.setState({input: value})
  }
  handleNewBooks(arrayOfBooks){
    this.setState({arrBook: arrayOfBooks})
  }

  handleClick(){
    axios.get(`https://reststop.randomhouse.com/resources/titles?search=${this.state.input}`)
      .then(response => {console.log(response.data.title)
        this.setState({
          arrBook: response.data.title
        })
      });
  }

  render() {
    // let mappedBooks=this.state.arrBook.map((book) => {
    //   return <Book key={book.isbn} oneBook={book}/> 
    // })
    return (
      <div className="App">
      <h1>Search your favorite books!</h1>
        <input onChange={e => this.handleChange(e.target.value)}type="text"/>
        <button onClick={() => this.handleClick()} >Search</button>
        <div className="Main">
        {/* {mappedBooks} */}
        <Book arrBook={this.state.arrBook} />
            <Top10 />
          <div>
         
          </div>
          <Favorites />
        </div>
      </div>
    );
  }
}

export default App;
