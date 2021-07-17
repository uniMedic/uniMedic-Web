import {React,useState} from 'react';
import './Pacientes.css';
import DataTable from 'react-data-table-component';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
//import 'boostrap/dist/css/boostrap.min.css';


var dUsu;
const Pacientes=()=>{

    const [user,setUser]=useState([
        {
        
            nombre:'Andrea',
            apelli:'Roman',
            Nhis:2,
            edad:21,
            dir:'Comas',
            estado:'Atendido'
        },{
            
            nombre:'Sofia',
            apelli:'Romero',
            Nhis:1,
            edad:19,
            dir:'Los Olivos',
            estado:'En espera'
        
        },{
            
            nombre:'Angel',
            apelli:'Bellido',
            Nhis:3,
            edad:28,
            dir:'Rimac',
            estado:'En espera'
        
        },{
            
            nombre:'Carlos',
            apelli:'Sanchez',
            Nhis:5,
            edad:30,
            dir:'La Molina',
            estado:'Atendido'
        
        },{
            
            nombre:'Juan',
            apelli:'Antezana',
            Nhis:4,
            edad:60,
            dir:'Miraflores',
            estado:'Atendido'
        
        },{
            
            nombre:'Brenda',
            apelli:'Pezo',
            Nhis:6,
            edad:35,
            dir:'Miraflores',
            estado:'En espera'
        
        },{
            
            nombre:'Janet',
            apelli:'Fowier',
            Nhis:7,
            edad:45,
            dir:'La Molina',
            estado:'Atendido'
        
        }
    ]);
    const [abierto,setAbierto]=useState(false);

    const [someone,setSomeone]=useState({});
    const [busqueda,setBusqueda]=useState("");
    const [pascien,setPascien]=useState(user);
    
    const onChange=async e=>{
        e.persist();
        await setBusqueda(e.target.value);
        filtrarElementos();
        if(e.target.value==""){
            setPascien(user);
        }
    }
    const filtrarElementos=()=>{
        var search=user.filter(item=>{
            if(item.nombre.toString().includes(busqueda) || item.apelli.toString().includes(busqueda)){
                return item;
            }
        });
        setPascien(search);
    }
    /*function componentDidMount(){
        setPascien(user);
    }*/

    const abrirModal=(e)=>{
        setAbierto(!abierto);
        
        if(abierto==false){
            setSomeone(user.find(u=>{if(u.Nhis==e.target.value){
                return u;
            }}))
        }
         
        
    }
    return(

        <div>
            <input className="entrada" name="busqueda" value={busqueda} onChange={onChange} placeholder="Buscar..."></input><br/>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Información</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Nro.Historial</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {pascien.map(usuario=>(
                        <tr>
                           <td><button value={usuario.Nhis} onClick={abrirModal}>Ver</button></td> 
                           <td>{usuario.nombre}</td> 
                           <td>{usuario.apelli}</td> 
                           <td>{usuario.Nhis}</td> 
                           <td>{usuario.estado}</td> 
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            
            <Modal isOpen={abierto}>
            <ModalHeader>{someone.nombre+" "+someone.apelli}</ModalHeader>
            <ModalBody>
                <label>Id del paciente</label><br/>
                <label>{someone.Nhis}</label><br/>
                <label>Edad</label><br/>
                <label>{someone.edad}</label><br/>
                <label>Dirección</label><br/>
                <label>{someone.dir}</label><br/>

                <button>descargar</button> <button>Validar</button>
            </ModalBody>
        <ModalFooter>
            <button  onClick={abrirModal}>Cerrar</button>
        </ModalFooter>
        </Modal>
        </div>

    );
}
export default Pacientes;