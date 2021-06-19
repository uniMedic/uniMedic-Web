import React, {useState} from 'react';
import { Component } from 'react';
import './Pacientes.css';
import DataTable from 'react-data-table-component';

function Pascien(nombre,apelli,Nhis,estado){
    this.nombre=nombre;
    this.apelli=apelli;
    this.Nhis=Nhis;
    this.estado=estado;
}
var listaPasci=[new Pascien("Andrea","Roman",2,"Atendido"),new Pascien("Sofia","Romero",1,"En espera"),new Pascien("Angel","Bellido",3,"En espera"),new Pascien("Carlos","Sanchez",5,"Atendido"),new Pascien("Juan","Antezana",4,"Atendido"),new Pascien("Brenda","Pezo",6,"En espera"),new Pascien("Janet","Fowier",7,"Atendido")];

const columnas=[{
    name: 'Nombres',
    selector: 'nombre',
    sortable: true
},
{
    name: 'Apellidos',
    selector: 'apelli',
    sortable:true
},
{
    name: 'Nro. Historial',
    selector: 'Nhis',
    sortable:true
},
{
    name: 'Estado',
    selector: 'estado',
    sortable:true
}
];
const paginacionOpciones={
    rowsPerPageText: "Filas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
};



class Pacientes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            busqueda:"",
            pascien:[]
        };
    }
    
    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarElementos();
    }
    filtrarElementos=()=>{
        var search=listaPasci.filter(item=>{
            if(item.nombre.toString().includes(this.state.busqueda) || item.apelli.toString().includes(this.state.busqueda)){
                return item;
            }
        });
        this.setState({pascien:search})
    }
    componentDidMount(){
        this.setState({pascien:listaPasci});
    }
render(){
    return(
        <div className="Pacien">
            <div className="busc">
                <input  className="entradaB" name="busqueda" type="text" placeholder="Buscar..." value={this.state.busqueda} onChange={this.onChange}></input>
            </div>
            <section className="data">
            <DataTable
        columns={columnas}
        data={this.state.pascien}
        title="Lista de Pacientes"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="300px"
        
        />
            </section>
        
        </div>
        
    );

}
    
    
}
export default Pacientes;