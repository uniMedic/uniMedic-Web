import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './galery.css';

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function Galery() {
  return (
	<div style={styles}>
		<Carousel className="tam">
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrhVWLFHc94nHZoyysM400hRYOTINm2VmJg8zPFPKIING0EOZPkT0-5ndlNHpTXWNJzE&usqp=CAU" alt="uniMedic brinda los últimos avances de IA a su disposición" />
				<p className="legend">uniMedic brinda los últimos avances de IA a su disposición</p>
			</div>
			<div>
				<img src="https://www.researchgate.net/profile/Babak-Ehteshami-Bejnordi/publication/313857891/figure/fig1/AS:553618056593408@1509004238628/Collage-of-some-medical-imaging-applications-in-which-deep-learning-has-achieved.png" alt="Con soporte para varias partes del cuerpo"/>
				<p className="legend">Con soporte para varias partes del cuerpo</p>
			</div>
			<div>
				<img src="https://s.france24.com/media/display/001bbcd0-991d-11ea-b4d9-005056bff430/w:1280/p:16x9/a807003c00b2c59d0ec7648e62b32a2990309288.webp" alt="Evite exponerse a otras enfermedades"/>
				<p className="legend">Evite exponerse a otras enfermedades</p>
			</div>
		</Carousel>
	</div>
  );
}



export default Galery;
