import {React,useState} from 'react';
import './Pacientes.css';

import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';


export var numA=0;
export var numE=0;
var lista=[
    {
    
        nombre:'Andrea',
        apelli:'Roman',
        Nhis:2,
        edad:21,
        dir:'Comas',
        estado:''
    },{
        
        nombre:'Sofia',
        apelli:'Romero',
        Nhis:1,
        edad:19,
        dir:'Los Olivos',
        estado:''
    
    },{
        
        nombre:'Angel',
        apelli:'Bellido',
        Nhis:3,
        edad:28,
        dir:'Rimac',
        estado:''
    
    },{
        
        nombre:'Carlos',
        apelli:'Sanchez',
        Nhis:5,
        edad:30,
        dir:'La Molina',
        estado:''
    
    },{
        
        nombre:'Juan',
        apelli:'Antezana',
        Nhis:4,
        edad:60,
        dir:'Miraflores',
        estado:''
    
    },{
        
        nombre:'Brenda',
        apelli:'Pezo',
        Nhis:6,
        edad:35,
        dir:'Miraflores',
        estado:''
    
    },{
        
        nombre:'Janet',
        apelli:'Fowier',
        Nhis:7,
        edad:45,
        dir:'La Molina',
        estado:''
    
    }
]
 export const Pacientes=()=>{
   
    const [user,setUser]=useState(lista);
    const [val,setVal]=useState(false);

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
   

    const abrirModal=(e)=>{
        setAbierto(!abierto);
        
        if(abierto==false){
            setSomeone(user.find(u=>{if(u.Nhis==e.target.value){
                return u;
            }}))
        }
         
        
    }
    const abrirVal=(e)=>{
        setVal(!val);
    }
    const Confir=(e)=>{
        setVal(!val);
        numA=numA+1;
        let indi;
        if(val==true){
            for(let i=0;i<lista.length;i++){
                if(lista[i].Nhis==someone.Nhis){
                    lista[i].estado='Atendido';
                    indi=i;
                }
            }
            //alert(lista[indi].estado+" y "+lista[indi].Nhis);
            setUser(lista);
        }
        
        
        //alert(numA);
    }
    const Enespe=(e)=>{
        setVal(!val);
        numE=numE+1;
        let indi;
        if(val==true){
            for(let i=0;i<lista.length;i++){
                if(lista[i].Nhis==someone.Nhis){
                    lista[i].estado='En espera';
                    indi=i;
                }
            }
            //alert(lista[indi].estado+" y "+lista[indi].Nhis);
            setUser(lista);
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
                           <td><button className="boton" value={usuario.Nhis} onClick={abrirModal}>Ver</button></td> 
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

                <button>Diagnostico</button> <button onClick={abrirVal}>Validar</button>
            </ModalBody>
        <ModalFooter>
            <button  onClick={abrirModal}>Cerrar</button>
        </ModalFooter>
        </Modal>

        <Modal isOpen={val}>
            <ModalBody>
                <label>Que acción desea tomar?</label><br/>
            <button value={someone.Nhis} onClick={Confir}>Confirmar</button> <button value={someone.Nhis} onClick={Enespe}>En espera</button>
            </ModalBody>
        </Modal>
        </div>

    );
}
