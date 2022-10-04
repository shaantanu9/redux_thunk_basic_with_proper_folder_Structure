import logo from "./logo.svg";
import "./App.css";
import Bookmarks from "./components/Bookmarks";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Bookmarks />
    </div>
  );
}

export default App;
