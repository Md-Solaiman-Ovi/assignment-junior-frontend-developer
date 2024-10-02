import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import WhatIsDigikoein from "./components/whatIsDigikoein";
import WhatWeDo from "./components/whatWeDo";

function App() {
  return (
    <main>
      <Home />
      <WhatWeDo />
      <WhatIsDigikoein />
      <Footer />
    </main>
  );
}

export default App;
