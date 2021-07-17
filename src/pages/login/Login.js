import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import './Login.css';
import Title from './components/title/Title';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Imagen/logo.png';
const Login = () => {
	const Utyles = makeStyles({
		root: {
			background: 'linear-gradient(120deg,transparent,var(--primary-color),trasparent)',
			border: 0,
			borderRadius: 20,
			boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
			color: 'black',
			height: 48,
			padding: '0 30px',
			position: 'relative',
			right:'10px',
			bottom:'20px',
			transition: '0.6s'
		}
	});
	const stilo = Utyles();
	const [ datos, setDatos ] = useState({
		usuario: '',
		contraseña: ''
	});

	const handleChange = (event) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className="login-container">
			<Title text="Bienvenido" />
			<img className="log" src={logo} />
            <form>
            <input type="text" name="usuario" id="usuario" placeholder="Ingrese Usuario"  className="usu"></input><br/>
            <input type="password" name="contraseña" id="contraseña" placeholder="Ingrese Contraseña" className="usu"></input> 
            </form>
			<Button className={stilo.root} variant="outlined" color="primary" href="https://google.com">
				Ingresar
			</Button>
            <br/>
            <br/>
			
			
		</div>
	);
};
export default Login;
