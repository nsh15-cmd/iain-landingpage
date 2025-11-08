import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ComparisonsPage from "./pages/Comparisons";

function App() {
  return (
    <Router>
      <Layout title="IAIN">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Brands />
                <Services />
                <AboutUs />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/comparisons" element={<ComparisonsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
