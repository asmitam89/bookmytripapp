import "./App.css";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Listcard from "./Components/Listcard";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Carousel />
      <Listcard />
    </div>
  );
}

export default App;
