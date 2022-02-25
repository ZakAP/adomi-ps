import React from "react";
import {Navegacao, Botao} from "./index_style.js";
import { Link } from 'react-router-dom';

function Nav_bar() {
 

    return (
      <Navegacao>
        <Botao ><Link to="/">Início</Link></Botao>
        <Botao><Link to="/Exercicio_1">Exercício 1</Link></Botao>
        <Botao ><Link to="/Exercicio_2">Exercício 2</Link></Botao>
        <Botao><Link to="/Exercicio_3">Exercício 3</Link></Botao>
      </Navegacao>
    );
}
  
export default Nav_bar;