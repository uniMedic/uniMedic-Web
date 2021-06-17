import React from 'react';
import './IntMed.css';
import {BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import Tit from './Componets/titulo/Tit';
import Pacientes from './pacientes/Pacientes';
import Estadisticas from './estadisticas/Estadisticas';


const IntMed=()=>{

    return(
        <div className="Medico">
        

            <Tit text="Bienvenido de Nuevo " />
            <strong><Tit text="Dr. Peterson "/></strong><br/><br/>
            <div className="barra"></div>
            <div className="sombra">
        <div className="estadoPas">
            <label>Paciente en observación</label>
        </div>
        <div className="vistaPas">
        <img src="https://cdn.onlinewebfonts.com/svg/img_299586.png" 
                   height="40px" 
                   width="40px" 
                   className="images1"
                   ></img>
        <label className="textV">Andrea <br/>Roman</label>
        <button className="btn">continuar</button>
        </div>
            
               <section className="pas">
               
            <img src="https://image.flaticon.com/icons/png/512/1177/1177577.png" 
                   height="100px" 
                   width="100px" 
                   className="images"
                   ></img><br/>
            
                <label className="labe"><Link to ="/pacientes">+Pacientes</Link></label><br/>
                <label>Registro</label>
               </section>
               <section className="per">
               <img src="http://blogs.ubc.ca/victorcastillo/files/2014/10/analisis.png" 
                   height="100px" 
                   width="100px" 
                   className="images"
                   ></img><br/>
                   
                <label className="labe"><Link to ="/estadisticas">Performance</Link></label><br/>
                <label>Observa tu estadística</label>
               </section>
            </div>
<Router>
      <Switch>
          <Route path="/pacientes">
            <Pacientes/>
          </Route>
          <Route path="/estadisticas">
            <Estadisticas/>
          </Route>
      </Switch>
    </Router>
        </div>
        
    );
};
export default IntMed;