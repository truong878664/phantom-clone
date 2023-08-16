import Cards from "./sections/Cards";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";
import PannerDownload from "./sections/Welcome/PannerDowload";

function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Cards />

        <div className="grid place-content-center pb-72 md:pt-32">
          <PannerDownload
            title="Download * Phantom | to get started"
            topTitle="Trusted by more than 3 million people"
            sizeLabelHeader="medium"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
