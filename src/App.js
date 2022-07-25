import "./App.css";
import "./component/Header";
import FooterRights from "./component/footer";
import H1header from "./component/Header";
import Main from "./component/main";
import NavReact from "./component/nav";
import CardReact from "./component/cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavReact />
        <H1header />

        <CardReact />

        {/* <Main /> */}

        <FooterRights />
      </header>
    </div>
  );
}

export default App;
