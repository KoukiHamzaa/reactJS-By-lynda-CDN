import React, { Component } from "react";
import ReactDom from "react-dom";
import { render } from "react-dom";

let BookList = [
  { title: "Life of Me", auther: "Hamza Kouki", pages: 50 },
  { title: "Kitchen Congrats", auther: "Hamza Kouki", pages: 100 },
  { title: "You Have To Try Me", auther: "Hamza Kouki", pages: 150 }
];

const Book = ({ title, auther, pages }) => {
  return (
    <section>
      <h1> Title : {title}</h1>
      <p>Auther : {auther}</p>
      <p>Pages : {pages}</p>
    </section>
  );
};

const Library = ({books})  => {
  return (
    <div>
      {books.map((book,key) => (
        <Book 
        title={book.title}
        auther={book.auther}
        pages={book.pages} 
        key={key}/>
      ))}
    </div>
  );
};

ReactDom.render(
  <div>
    <Library books={BookList} />
  </div>,
  document.getElementById("root")
);
