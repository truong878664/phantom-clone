import SectionCard from "./components/SectionCard";
import dataSecurity from "./data/dataSecuriry";
import dataWallet from "./data/dataWallet";
import dataWeb3tool from "./data/dataWeb3tool";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";
import PannerDownload from "./sections/Welcome/PannerDowload";

function App() {
  return (
    <>
      <Header />
      <>
        <main>
          <Welcome />
          <SectionCard
            dataCard={dataWallet}
            header="Keep everything | in * one place"
            iconTitle="fa-solid fa-wallet"
            title="Your wallet"
            name="wallet"
          />
          <SectionCard
            dataCard={dataWeb3tool}
            header="Powerful * tools | made for everyone"
            iconTitle="fa-solid fa-earth-asia"
            title="Your web3tools"
            name="web3tool"
          />
          <SectionCard
            dataCard={dataSecurity}
            header="Controlled by you, | secured * by us"
            iconTitle="fa-solid fa-shield-heart"
            title="Your security"
            name="security"
          />
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
    </>
  );
}

export default App;
