import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";

import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import ResumeEdit from "./pages/ResumeEdit";
import PreviewandDownload from "./pages/PreviewandDownload";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="generate-resume" element={<GenerateResume />} />
          <Route path="resume-edit" element={<ResumeEdit />} />
          <Route path="DownloadResume" element={<PreviewandDownload/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
