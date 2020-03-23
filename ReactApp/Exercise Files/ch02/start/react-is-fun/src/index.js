import React from "react";
import ReactDom from "react-dom";


var style = {
  backgroundColor : 'orange',
  color : 'white',
  fontFamily : 'Arial',
}
const title = React.createElement(
  "ul",
  { id: "title", className: "header", style },
  React.createElement(
    'li',
    {},
    'item on our list'
  )
);

ReactDom.render(
  title,
  document.getElementById("root")
)