import React from "react";

class HorendBeastC extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title} />
        <p>{this.props.description}</p>
      </>
    );
  }
}
export default HorendBeastC;