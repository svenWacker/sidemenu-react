import "./App.scss";
import Sven, { SideMenu } from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="main">
        <h1> Sidemenu created with react</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
