import Header from "./sections/Header";
import Wallet from "./sections/Wallet";
import Welcome from "./sections/Welcome";

function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Wallet />
        <div className="h-screen bg-blue-300">123</div>
      </main>
    </>
  );
}

export default App;
