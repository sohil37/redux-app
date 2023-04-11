import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center">
        <Shop />
      </div>
    </>
  );
}

export default App;
