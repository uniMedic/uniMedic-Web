import {React,useState} from 'react';
import './IntMed.css';
import {BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import Tit from './Componets/titulo/Tit';
import {Pacientes} from './pacientes/Pacientes';
import Estadisticas from './estadisticas/Estadisticas';
import Galery from './galeria/galery';


const IntMed=()=>{
    //const [cantidad,setCantidad]=useState(0);
    
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
        <img src="https://www.media1.hw-static.com/wp-content/uploads/40017678.jpg" 
                   height="40px" 
                   width="40px" 
                   className="images1"
                   ></img>
        <label className="textV">Andrea <br/>Roman</label>
        <button className="btn">continuar</button>
        </div>
               <section className="pas">
               
            <img src="https://image.flaticon.com/icons/png/512/1177/1177577.png" 
                   height="80px" 
                   width="80px" 
                   className="images"
                   ></img><br/>
            
                <label className="labe">
                <a ><Link to="/pacientes">+Pacientes</Link></a> 
                        
                    </label><br/>
                <label className="let">Registro</label>
               </section >
               <section className="per">
               <img src="http://blogs.ubc.ca/victorcastillo/files/2014/10/analisis.png" 
                   height="80px" 
                   width="80px" 
                   className="images"
                   ></img><br/>
                   
                <label className="labe">
                    <a ><Link to="/estadisticas">+Performance</Link></a> 
                    </label><br/>
                <label className="let">Observa tu estadística</label>
               </section>
               <Galery/>
        <Router>        
      <Switch>
      <Route path="/pacientes"  component={Pacientes}/>
          <Route path="/estadisticas" component={Estadisticas}/>
           
      </Switch>
    </Router>
            </div>

    
        </div>
        
    );
};

export default IntMed;