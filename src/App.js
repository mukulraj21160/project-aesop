import "./App.css";
import GridComponent from "./components/GridComponent";
import Header from "./components/Header";
import GridImage from "./components/GridImages";
import MediaCard from "./components/MediaCard";
import Home from "./pages/Home";
import ProductSection from "./components/ProductSection";
import OilSection from "./components/OilSection";
// import Home from "../"

function App() {
  return (
    <div>
      {/* <GridComponent /> */}
      {/* <Header /> */}
      {/* <GridImage /> */}
      {/* <MediaCard />
      <MediaCard />
      <MediaCard /> */}

      <Home />
      <ProductSection />
      <OilSection />
    </div>
  );
}

export default App;
