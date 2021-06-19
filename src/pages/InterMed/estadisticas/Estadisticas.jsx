import React from 'react';
import './Estadisticas.css';
import DoughnutChart from './grafico';
const Estadisticas=()=>{
    return(
        <div >
            <div className="cuerp">
                    
                    <img src="https://cdn.onlinewebfonts.com/svg/img_299586.png" 
                    height="150px" 
                     width="150px" 
                    className="image"
                   ></img>
                   <div className="infoDoc">
                   <h1>Peterson JR</h1>
                <h5>Doctor suplente</h5>
                <label>Hospital</label>
                <h5>Cayetano Heredia</h5>
                <label>Especialidad</label> <label>Contrato</label><br/>
                <label>Neurología</label> <label>hasta 2022</label><br/>
                   </div>
                   <section className="PasA">
                        <label>Pacientes atendidos</label>
                        <img src="https://aux2.iconspalace.com/uploads/user-group-icon-256.png" 
                    height="50px" 
                     width="50px" 
                    className="Pima"
                   ></img>
                   <label className="num">27</label>
                   </section>
                   <section className="PasE">
                   <label>Pacientes en espera</label>
                   <img src="https://aux2.iconspalace.com/uploads/user-group-icon-256.png" 
                    height="50px" 
                     width="50px" 
                    className="Pime"
                   ></img>
                   <label className="num">12</label>
                   </section>
            </div>
            <div className="estadis">
                <h1>Estadísticas</h1>
                <DoughnutChart/>
            </div>
        </div>
    );
}
export default Estadisticas;