import "./styles.css";
import { Header } from "./Components/Header/Header";
import { Autocomplete } from "./Components/Autocomplete/Autocomplete";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="auto-container"></div>
      <Autocomplete />
    </div>
  );
}
