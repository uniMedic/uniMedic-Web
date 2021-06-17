import React, {useState} from 'react';
import { Component } from 'react';
import './Pacientes.css';
import DataTable from 'react-data-table-component';

function Pascien(nombre,apelli){
    this.nombre=nombre;
    this.apelli=apelli;
}
var listaPasci=[new Pascien("Andrea","Roman"),new Pascien("Sofia","Romero"),new Pascien("Angel","Bellido"),new Pascien("Carlos","Sanchez"),new Pascien("Juan","Antezana"),new Pascien("Brenda","Pezo"),new Pascien("Janet","Fowier")];

const columnas=[{
    name: 'Nombres',
    selector: 'nombre',
    sortable: true
},
{
    name: 'Apellidos',
    selector: 'apelli',
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
                <input name="busqueda" type="text" placeholder="Buscar..." value={this.state.busqueda} onChange={this.onChange}></input>
                <button>Buscar</button>
            </div>
            
        <DataTable
        columns={columnas}
        data={this.state.pascien}
        title="Lista de Pacientes"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="300px"

        
        />
        </div>
        
    );

}
    
    
}
export default Pacientes;