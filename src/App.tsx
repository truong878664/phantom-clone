<<<<<<< HEAD
import Cards from "./sections/Cards";
=======
import Card from "./sections/Cards";
import Footer from "./sections/Footer";
>>>>>>> 95b2ed72e7aaef5666e39f9c3c4f82def8aa1ed6
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";
import PannerDownload from "./sections/Welcome/PannerDowload";

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <main>
        <Welcome />
        <Wallet />
        <Cards/>
        <PannerDownload position="relative" theme="purple"/>
      </main>
      <footer></footer>
=======
      <>
        <main>
          <Welcome />
          <Card/>
          <div className="grid place-content-center pb-72 md:pt-32">
            <PannerDownload
              title="Download * Phantom | to get started"
              topTitle="Trusted by more than 3 million people"
              sizeLabelHeader="medium"
            />
          </div>
        </main>
        <Footer />
      </>
>>>>>>> 95b2ed72e7aaef5666e39f9c3c4f82def8aa1ed6
    </>
  );
}

export default App;
