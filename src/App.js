import Cta from "./components/cta";
import InfoSection from "./components/info-section";
import Navbar from "./components/navbar";
import WavingHand from "./components/waving-hand";

function App() {
  return (
    <div className="App">
      <WavingHand/>
      <Navbar />
      <Cta />
      <InfoSection />
    </div>
  );
}

export default App;
