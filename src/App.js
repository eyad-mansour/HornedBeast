import "./App.css";
import "./component/Header";
import FooterRights from "./component/footer";
import H1header from "./component/Header";
import Main from "./component/main";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <H1header />
          <Main />
          <FooterRights />
        </header>
      </div>
    );
  }
}
export default App;
