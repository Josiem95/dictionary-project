import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="search" />
        </main>
        <footer className="App-footer">
          <a href="https://vigorous-knuth-f45585.netlify.app">Open-sourced </a>
          code by
          <a href="https://happy-meitner-b5fe96.netlify.app"> Josie Mortison</a>
        </footer>
      </div>
    </div>
  );
}
