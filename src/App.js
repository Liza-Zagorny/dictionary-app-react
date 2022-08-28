import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a
            href="https://github.com/Liza-Zagorny/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Liza Neiman
        </p>
      </header>
      <h2 className="Title">What word do you want to look up?</h2>
      <Dictionary defaultWord="hello" />
    </div>
  );
}

export default App;
