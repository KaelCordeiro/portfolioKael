import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Sobre from "./sobre/Sobre";
import Projetos from "./projetos/Projetos";
import Certificado from "./certificados/Certificado";
import Contatos from "./contatos/Contatos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projeto" element={<Projetos />} />
        <Route path="/certificados" element={<Certificado />} />
        <Route path="/contato" element={<Contatos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
