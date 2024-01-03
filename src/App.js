import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Container from "./components/Container";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./home/Home";
import Sobre from "./sobre/Sobre";
import Tecnologia from "./tecnologias/Tecnologia"
    
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
          <Route path="/tecnologias">
            <Tecnologia />
          </Route>
          </Container>
        </Switch>
        <Footer />
       </Router>
      );
    }

export default App;
