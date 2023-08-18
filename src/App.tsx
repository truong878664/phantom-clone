import { useEffect } from 'react';
import Cards from './sections/Cards';
import Footer from './sections/Footer';
import Header from './sections/Header';
import PannerDownloadFooter from './sections/PannerDownloadFooter';
import Welcome from './sections/Welcome';

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      document.querySelector('#_phantom')?.remove();
    };
  });
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Cards />
        <PannerDownloadFooter />
      </main>
      <Footer />
    </>
  );
}

export default App;
