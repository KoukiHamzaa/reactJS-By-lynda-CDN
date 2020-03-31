// import React, { Component } from "react";
// import ReactDom from "react-dom";

// let BookList = [
//   { title: "Life of Me", auther: "Hamza Kouki", pages: 50 },
//   { title: "Kitchen Congrats", auther: "Hamza Kouki", pages: 100 },
//   { title: "You Have To Try Me", auther: "Hamza Kouki", pages: 150 }
// ];

// const Book = ({ title, auther, pages, freeBookMark }) => {
//   return (
//     <section>
//       <h1> Title : {title}</h1>
//       <p>Auther : {auther}</p>
//       <p>Pages : {pages}</p>
//       <h2>Free Book Mark : {freeBookMark ? "yes" : "No"}</h2>
//     </section>
//   );
// };

// const Hiring = () => (
//   <div>
//     <p>The library is hiring. Go to www.library.com/jobs for more.</p>
//   </div>
// );

// const NotHiring = () => (
//   <div>
//     <p>The library is not hiring. Check back later for more info.</p>
//   </div>
// );

// class Library extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       freeBookMark: false,
//       hiring: false,
//       data: [],
//       loading: false
//     };

//     this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
//   }

//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//     // fetch("https://swapi.co/api/people/1")
//       .then(data => data.json())
//       .then(data => this.setstate({ data, loading: false }));

//   }

//   componentDidUpdate() {
//     console.log("the component is now updated");
//   }

//   toggleOpenClosed() {
//     this.setState(prevState => ({
//       // open: !this.state.open
//       open: !prevState.open
//     }));
//   }

//   render() {
//     console.log(this.state.data);
//     // const books = this.props.books; Or the easier way =>
//     const { books } = this.props;
//     return (
//       <div>
//         <h1> The library is {this.state.open ? "Open" : "Closed"}</h1>
//         <button onClick={this.toggleOpenClosed}>Change</button>
//         {books.map((book, key) => (
//           <Book
//             title={book.title}
//             auther={book.auther}
//             pages={book.pages}
//             freeBookMark={this.state.freeBookMark}
//             key={key}
//           />
//         ))}
//         {this.state.hiring ? <Hiring /> : <NotHiring />}
//         {this.state.loading ? (
//           "loading ..."
//         ) : (
//           <div>
//             {this.state.data.map(product => {
//               return (
//                 <div>
//                   <h3>Library Product of the Week!</h3>
//                   <h4>{product.name}</h4>
//                   <img src={product.image} height={100} />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// ReactDom.render(
//   <div>
//     <Library books={BookList} />
//   </div>,
//   document.getElementById("root")

// );
// // eslint-disable-next-line
import React, { Component } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => console.log(data));
    console.log("hamza");
  }

  render() {
    return <div>Code goes here</div>;
  }
}

export default App;
