import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import WhatIsDigikoein from "./components/whatIsDigikoein";
import WhatWeDo from "./components/whatWeDo";
import WhatWeDoOffer from "./components/whatWeDoOffer";

function App() {
  return (
    <main>
      <Home />
      <WhatWeDo />
      <WhatIsDigikoein />
      <WhatWeDoOffer />
      <Footer />
    </main>
  );
}

export default App;
