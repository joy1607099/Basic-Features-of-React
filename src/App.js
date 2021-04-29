import React, { Component } from 'react';
import Book from './components/Book';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <Person name="Joy" age="25" />
//      <Person name="Jahn" age="24">I am person element</Person>

//     </div>
//   );
// }
class App extends Component {

  state = {
    books: [
      { bookName: "Himu", author: "Humayun Ahmed" },
      { bookName: "Misir Ali", author: "Humayun Ahmed" },
      { bookName: "Amar bondhu Rashed ", author: "Jafor Iqbal" }
    ],

  }

  changeBookState = (newState) => {
    this.setState({
      books: [
        { bookName: newState, author: "Humayun Ahmed" },
        { bookName: "ekattorer din guli", author: "Jahanara Imam" },
        { bookName: "Amar bondhu Rashed ", author: "Jafor Iqbal" }
      ],

    });
  }

  inputChange = (event) => {
    this.setState(
      {
        books: [
          { bookName: event.target.value, author: "Humayun Ahmed" },
          { bookName: "ekattorer din guli", author: "Jahanara Imam" },
          { bookName: "Amar bondhu Rashed ", author: "Jafor Iqbal" }
        ],

      });
  }


  render() {
    const style = {
      border : "1px solid red",
      background : 'black',
      borderRadius : "5px",
      color : "white"


    }
    return (
      <div className="App">
        <h1 style = {style}>Book list</h1>
        <button onClick={() => this.changeBookState("Misir Ali")}>Change State</button>
        <input onChange = {this.inputChange}></input>
        <Book
          bookName={this.state.books[0].bookName}
          author={this.state.books[0].author}
          inputName = {this.inputChange} />
        <Book
          bookName={this.state.books[1].bookName}
          author={this.state.books[1].author} />
        <Book
          bookName={this.state.books[2].bookName}
          author={this.state.books[2].author}
          change={this.changeBookState.bind(this, "kothao keu nei")} />


      </div>
    );
  }

}

export default App;
