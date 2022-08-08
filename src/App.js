import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <main className="App">
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </main>
  );
}

export default App;
