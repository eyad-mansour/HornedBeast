import "./App.css";
import "./Header";
import FooterRights from "./footer";
import H1header from "./Header";
import HornedBeast from "./main";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1header />

        <HornedBeast />

        <FooterRights />
      </header>
    </div>
  );
}

export default App;
