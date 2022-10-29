import "../src/App.css";
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <body className="App-body">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <Main/>
      </main>
      <footer className="App-Footer">
        <Footer/>
      </footer>
    </body>
  );
}

export default App;
