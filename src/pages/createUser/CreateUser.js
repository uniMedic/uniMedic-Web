import {React,useState} from 'react';
import './CreateUser.css';

const CreateUser=()=>{
    
    const [btn,setBtn]=useState(true);        
   const [check,setCheck]=useState([]);
    
    const handleChangeCheck= (e) =>{
        var aux=null;
        if(check.includes(e.target.value)){
            aux=check.filter(elemento=>elemento!==e.target.value);
        }else{
            aux=check.concat(e.target.value);
        }
           setCheck(aux);
           if(aux.length>0){
               setBtn(false);
           }else{
               setBtn(true);
           }
    };
    const [usedata,setUserdata]=useState({
        marca:'',
        nombre:'',
        correo:'',
        cumple:'',
        contra:'',
        Rcontra:'',
        dir:'',
        subir:'',
        Hlabor:'',
        Espe:'',
        time:''

    });
    const actulizar=(e)=>{
        setUserdata({
            ...usedata,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="Cuerpo">
            
            <form className="Usuario">
            <label className="tit">Registo de Cuenta</label><br/>
            <input className="in8" type="checkbox" name="marca" onChange={handleChangeCheck}></input> <label  id="1" className="l11">Soy un Médico</label><br/>
    <label className="l1">Nombre Completo</label>   <label className="l2">Subir foto de perfil</label><br/>
    <input className="in1" name="nombre" onChange={actulizar}></input><input className="in7" type="file" name="subir" disabled={btn} onChange={actulizar}></input><br/>
    
    <label className="l3">Correo Electronico</label>  <label className="l4">Hospital donde Labora</label><br/>
    <input className="in2" type="email" name="correo" onChange={actulizar}></input>  <input className="in9" name="Hlabor" disabled={btn} onChange={actulizar}></input><br/>
    
    <label className="l5">Fecha de Cumpleaños</label>  <label className="l6">Especialidad</label><br/>
    <input className="in3" type="date" name="cumple" onChange={actulizar}></input>  <input className="in10" name="Espe" disabled={btn} onChange={actulizar}></input><br/>
    
    <label className="l7">Contraseña</label>  <label className="l8">Tiempo de Contraro</label><br/>
    <input className="in4" type="password" name="contra" onChange={actulizar}></input>  <input className="in11" name="time" disabled={btn} onChange={actulizar}></input><br/>
    
    <label className="l9">Confirmar Contraseña</label><br/>
    <input className="in5" type="password" name="Rcontra" onChange={actulizar}></input><br/>
    
    <label className="l10">Dirección</label><br/>
    <input className="in6" name="dir" onChange={actulizar}></input><br/><br/>
    <button className="b">Registrarse</button>
        

    </form>
        </div>

    );
}

export default CreateUser;