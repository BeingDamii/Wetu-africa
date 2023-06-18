import { useState } from "react";
import Cta from "./components/cta";
import InfoSection from "./components/info-section";
import Navbar from "./components/navbar";
import OffCanvasMenu from "./components/offCanvasMenu";
import WavingHand from "./components/waving-hand";

function App() {
  const [navActive, setNavActive] = useState(false);
  return (
    <div
      style={{
        height: navActive ? "100vh " : "fit-content",
        overflow: navActive ? "hidden" : "show",
      }}
    >
      <OffCanvasMenu navActive={navActive} setNavActive={setNavActive} />
      <WavingHand />
      <Navbar setNavActive={setNavActive} />
      <Cta />
      <InfoSection />
    </div>
  );
}

export default App;
