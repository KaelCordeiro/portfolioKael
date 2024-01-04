import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Container from "./components/Container";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./home/Home";
import Sobre from "./sobre/Sobre";
import Projetos from "./projetos/Projetos"
import Certificado  from "./certificados/Certificado";
import Contatos from "./contatos/Contatos";
    
function App() {
      return (
       <Router>
        <Navbar />
        <Switch>
          <Container>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/projeto">
            <Projetos />
          </Route>
          <Route path="/certificados">
            <Certificado />
          </Route>
          <Route path="/contato">
            <Contatos />
          </Route>
          </Container>
        </Switch>
        <Footer />
       </Router>
      );
    }

export default App;
