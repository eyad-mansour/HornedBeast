import React from "react";

class HorendBeastC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.title}
          onClick={this.handleClick}
        />
        <p>{this.props.description}</p>
        <span>👍 like{this.state.counter}</span>
      </>
    );
  }
}
export default HorendBeastC;
