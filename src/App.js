import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import "./style/landingPage.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      {/* Intro of section  */}
      <div className=" myBg ">
        <NavigationBar />
        <Intro />
      </div>
      <div className="myTrending">
        <Trending />
      </div>
      <div className="mySuperhero">
        <Superhero />
      </div>
      {/* End of section  */}
    </div>
  );
}

export default App;
