import "./App.scss";
import Sven, { SideMenu } from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      Sidemenu created with react
      <SideMenu />
      <Sven />
      <div className="main"></div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
