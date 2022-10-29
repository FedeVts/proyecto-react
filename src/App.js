import "../src/App.css";
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </body>
  );
}

export default App;
