import React, { Component } from "react";
import ReactDom from "react-dom";

const Book = ({ title, auther, pages }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{auther}</p>
      <p>{pages}</p>
    </section>
  );
};

const Library = () => {
  return (
    <div>
      Welcome
      <Book title="Hamza Life" auther="Hamza Kouki" pages={500} />
    </div>
  );
};

ReactDom.render(
  <div>
    <Library />
  </div>,
  document.getElementById("root")
);
