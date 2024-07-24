import { WiDayHaze } from "react-icons/wi";
import "./App.css";

const title = "Week3 Assignment";
const url = "https://reactjs.org";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WiDayHaze className="icon-wiDayHaze" />
        <p>{title}</p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
