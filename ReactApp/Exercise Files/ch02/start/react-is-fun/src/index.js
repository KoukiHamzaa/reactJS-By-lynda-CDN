import React, { Component } from "react";
import ReactDom from "react-dom";

let BookList = [
  { title: "Life of Me", auther: "Hamza Kouki", pages: 50 },
  { title: "Kitchen Congrats", auther: "Hamza Kouki", pages: 100 },
  { title: "You Have To Try Me", auther: "Hamza Kouki", pages: 150 }
];

const Book = ({ title, auther, pages, freeBookMark }) => {
  return (
    <section>
      <h1> Title : {title}</h1>
      <p>Auther : {auther}</p>
      <p>Pages : {pages}</p>
      <h2>Free Book Mark : {freeBookMark ? "yes" : "No"}</h2>
    </section>
  );
};

const Hiring = () => (
  <div>
    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>
);

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      freeBookMark: false,
      hiring: false
    };

    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }

  toggleOpenClosed() {
    this.setState(prevState => ({
      // open: !this.state.open
      open: !prevState.open
    }));
  }

  render() {
    console.log(this.state);
    // const books = this.props.books; Or the easier way =>
    const { books } = this.props;
    return (
      <div>
        <h1> The library is {this.state.open ? "Open" : "Closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, key) => (
          <Book
            title={book.title}
            auther={book.auther}
            pages={book.pages}
            freeBookMark={this.state.freeBookMark}
            key={key}
          />
        ))}
        {this.state.hiring ? <Hiring /> : <NotHiring />}
      </div>
    );
  }
}

ReactDom.render(
  <div>
    <Library books={BookList} />
  </div>,
  document.getElementById("root")
);
