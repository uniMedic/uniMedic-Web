import React from 'react';
import { numA, numE } from '../pacientes/Pacientes';
import './Estadisticas.css';
import DoughnutChart from './grafico';
import DoughnutChart2 from './grafico2';
import DoughnutChart3 from './grafico3';

const Estadisticas=()=>{
    return(
        <div >
            <div className="cuerp">
                    
                    <img src="https://media.istockphoto.com/photos/asian-doctor-picture-id530557865?k=6&m=530557865&s=612x612&w=0&h=mCYAg1qnJPtL14PvhiDroRLcRvJxo9xo4XITWhabgvM=" 
                    height="190px" 
                     width="190px" 
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
                   <label className="num">{numA}</label>
                   </section>
                   <section className="PasE">
                   <label>Pacientes en espera</label>
                   <img src="https://aux2.iconspalace.com/uploads/user-group-icon-256.png" 
                    height="50px" 
                     width="50px" 
                    className="Pime"
                   ></img>
                   <label className="num">{numE}</label>
                   </section>
            </div>
            <div className="estadis">
                <h1>Estadísticas</h1>
                <section className="gra1">
                    <h4 className="h4">Played Games</h4>
            <DoughnutChart/>
            </section>
                <section className="gra2">
                <h4 className="h4">Win Rate</h4>
            <DoughnutChart2/>
            </section>
            <section className="gra3">
            <h4 className="h4">Draw</h4>
            <DoughnutChart3/>
            </section>
            </div>
            
            
        </div>
    );
}
export default Estadisticas;