import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "../pages/Home";
import Exercicio_1 from "../pages/Exercicio_1";
import Exercicio_2 from "../pages/Exercicio_2";
import Exercicio_3 from "../pages/Exercicio_3";

function Router() {
    return (
        <BrowserRouter>
        <Routes>
          <Route element = {<Home />} path="/" exact />
          <Route element = {<Exercicio_1 />} path="/Exercicio_1" />
          <Route element = {<Exercicio_2 />} path="/Exercicio_2" />
          <Route element = {<Exercicio_3 />} path="/Exercicio_3" />
        </Routes>
      </BrowserRouter>
    );
  }
  
export default Router;