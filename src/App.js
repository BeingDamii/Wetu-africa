import Cta from "./components/cta";
import InfoSection from "./components/info-section";
import Navbar from "./components/navbar";
import OffCanvasMenu from "./components/offCanvasMenu";
import WavingHand from "./components/waving-hand";

function App() {
  return (
    <div className="App">
      <OffCanvasMenu/>
      {/* <WavingHand/> */}
      <Navbar />
      {/* <Cta /> */}
      {/* <InfoSection /> */}
    </div>
  );
}

export default App;
