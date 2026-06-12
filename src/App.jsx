import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CallForPapers from "./pages/CallForPapers";
import PaperSubmission from "./pages/PaperSubmission";
import Registration from "./pages/Registration";
import Committees from "./pages/Committees";
import Publications from "./pages/Publications";
import ConferencePartners from "./pages/ConferencePartners";
import Speakers from "./pages/Speakers";
import ICNCDA2025 from "./pages/ICNCDA2025";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArchiveTab from "./components/ArchiveTab";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ArchiveTab />
      {/* <div className="mt-12"> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/paper-submission" element={<PaperSubmission />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/conference-partners" element={<ConferencePartners />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/icncda2025" element={<ICNCDA2025 />} />
      </Routes>
      {/* </div> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
