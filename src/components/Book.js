import React, { Component} from 'react';
import '../stylesheets/Book.css';
const Book = (props) =>{
    return(
        <div className="Book">
            <h3 onClick= {props.change}> Book : {props.bookName}</h3>
            <h4>Author : {props.author}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName}></input>

        </div>);

}

export default Book;