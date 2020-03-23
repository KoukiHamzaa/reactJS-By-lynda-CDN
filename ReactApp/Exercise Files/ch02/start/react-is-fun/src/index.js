import React from "react";
import ReactDom from "react-dom";


class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    );
  }
}

ReactDom.render(
  <Message minutes={5} color="blue" msg="how are u !" />,
  document.getElementById("root")
);
