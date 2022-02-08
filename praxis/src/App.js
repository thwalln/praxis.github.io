import Header from "./components/navbar/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
