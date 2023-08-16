import Cards from "./sections/Cards";
import Header from "./sections/Header";
import Wallet from "./sections/Wallet";
import Welcome from "./sections/Welcome";
import PannerDownload from "./sections/Welcome/PannerDowload";

function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Wallet />
        <Cards/>
        <PannerDownload position="relative" theme="purple"/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
