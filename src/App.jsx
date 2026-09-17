import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PresidentsGallery from "./pages/PresidentsGallery.jsx";
import Board from "./pages/Board.jsx";
import NexCouncil from "./pages/NexCouncil.jsx";
import OfficeBearers from "./pages/OfficeBearers.jsx";
import Events from "./pages/Events.jsx";
import Blog from "./pages/Blog.jsx";
import Downloads from "./pages/Downloads.jsx";
import Links from "./pages/Links.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/chairmans-gallery" element={<PresidentsGallery />} />
        <Route path="about/board" element={<Board />} />
        <Route path="about/national-board" element={<NexCouncil />} />
        <Route path="office-bearers" element={<OfficeBearers />} />
        <Route path="events" element={<Events />} />
        <Route path="blog" element={<Blog />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="links" element={<Links />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
