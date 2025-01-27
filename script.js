// Estrellas con sus respectivas rutas de imagen, texto y fecha
const estrellas = [
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/1.jpg', texto: 'Estrella 1: La primera foto tuya del año, eres tan linda, no puedo expresar toda la felicidad que me traes cuando hablo contigo, asi que lo resumire en un: te amo mucho amorcito <3', fecha: '01-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/2.jpg', texto: 'Estrella 2: Tambien extraño a kiki, pero, es por un bien mayor, quiero poder estar contigo lo mas antes posible, solo, esperame...', fecha: '02-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/3.jpg', texto: 'Estrella 3: Para mi eres la mejor cocinera, te quiero mucho, cariño.', fecha: '03-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/4.jpg', texto: 'Estrella 4: No se cuanto habràs sufrido antes, y se que ese dolor sigue en ti, pero, pase lo que pase, nunca te abandonarè, te lo prometo', fecha: '04-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/5.jpg', texto: 'Estrella 5: Tu eres la mas linda, ya sea con tu pelo seco o mojado, te amo Jandy', fecha: '05-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/6.jpg', texto: 'Estrella 6: Pasè lo que pasè, prometo siempre amarte. en las buenas y en las malas, y me esforzarè para tenerte en mi futuro, lo prometo', fecha: '06-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/7.jpg', texto: 'Estrella 7: Te ves realmente muy linda, mas de lo que tu crees, como pude hacerme novio de una chica ta linda, tanto con tu pelo corto o largo, para mi eres la chica mas linda, te amo cariño <3', fecha: '07-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/8.jpg', texto: 'Estrella 8: Octubre o Diciembre, mi amor que siento hacia ti no ha cambiado, siento que te amo cada dìa mas, y espero que cuando llegue el dia de nuestro aniversario, podamos pasarlo, juntos, Te Amo Jandy.', fecha: '08-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/9.jpg', texto: 'Estrella 9: Sabes, quisiera abrazarte ahora mismo, tomarte de la mano y nunca soltarla ', fecha: '09-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/10.jpg', texto: 'Estrella 10: Al parecer kiki ha estado mas hiperactiva que de costumbre, y quien no lo estaria,  si tiene como dueña a la chica  mas linda que uno puede pedir, te amo jandy <3', fecha: '10-01-2025' },	// Continúa para las demás estrellas...
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/11.jpg', texto: 'Estrella 11: Peluche de capibara,entiendo tu frustracion de ir a vacacional, se que este año te ira bien, ningun esfuerzo es en vano,te lo prometo', fecha: '11-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/12.jpg', texto: 'Estrella 12: ¿Ya esta mejor tu pierna? Sabes, la verdad es que no se como pude hacerme novio de una chica tan linda, te acuerdas de la propuesta de la mañana?, si, acepto con mucho gusto casarme contigo y en un futuro formar hogar, Te Amo Cariño 💞', fecha: '12-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/13.jpg', texto: 'Estrella 13: Sabes, cuando miro el atardecer, veo un motivo, una razon para seguir adelante, y esa eres tu, cariño', fecha: '13-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/14.jpg', texto: 'Estrella 14: Los martes son realmente atareados para mi, llegar a mi casa y encontrar un mensaje tuyo o hablarte cuando estoy de regreso  a ella, me hace, muy feliz, te quiero mucho amorcito, nunca lo olvides <3', fecha: '14-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/15.jpg', texto: 'Estrella 15: Algo que amo de ti, es la simplesa que con un simple gesto puedes alegrar mi dia, gracias por, tenerte en mi vida, creo que un te amo se queda muy corto a todo lo que siento por ti Jandy 💞', fecha: '15-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/16.jpg', texto: 'Estrella 16: Realmente no me interesa lo que pueda llegar a pensar la gente, para mi la chica mas linda es mi Jandysita, me gustaria que tu tambien puedas verlo  💞', fecha: '16-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/17.jpg', texto: 'Estrella 17: Realmente el tiempo pasa muy rapido, parece ayer cuando recibi tu mensaje, de pronto un dia decidimos conocernos presencialmente, al otro abrazarnos, despues nos tomamos de las manos, se que pasaran muchas mas cosas, ¿te cuento un secreto?, te amo mas que a nada en este mundo <3', fecha: '17-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/18.jpg', texto: 'Estrella 18: Sabias que, eras la persona que amo mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho mucho, olvide decirtelo, te amo cariño 💞', fecha: '18-01-2025' },		
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/19.jpg', texto: 'Estrella 19: Hay algunas cosas que no conocemos el uno del otro, sé que poco a poco las conoceremos, y quiero que el día que lo sabramos todo, tener una verdad absoluta, mi amor por tí', fecha: '19-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/20.jpg', texto: 'Estrella 20: Hoy me preguntaste, que fue lo que hizo que me enamorara de tí, realmente no puedo contestar algo tan complejo con unas cuantas palabras, pero si pudiera resumirlo todo, es simple, eres la chicas mas linda que conozco, TE AMO 💞', fecha: '20-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/21.jpg', texto: 'Estrella 21: Sabìas que, aunque no lo veas, eres una chica muy talentosa, quisiera que tu tambien pudieras ver lo impresionante que eres <3', fecha: '21-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/22.jpg', texto: 'Estrella 22: Las cosas suceden por algo, todo lo que pasò, pasará o nunca ocurrió tuvo una causa, si de algo puedo estar seguro, es que fue parte de un todo el haberte conocido, una decisión que quizas ya estuvo escrita, y solo tenía que esperar a que sucediece, ¿te he dicho hoy lo mucho que te amo?', fecha: '22-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/23.jpg', texto: 'Estrella 23: Leí una frase que decía, el amor no es un sentimiento, es una decisión, cuando estés peleado con tu pareja, amela, si la distancia es mucha, amela, si la situación no da para mas, amela, así como la energía se conserva, el amor entre dos personas tambièn', fecha: '23-01-2025' },		
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/24.jpg', texto: 'Estrella 24: Sabes los gatos se parecen a ti, son un mundo totalmente distinto pero, existe cierta empatia que, se puede traducir como amor <3', fecha: '24-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/25.jpg', texto: 'Estrella 25: ¿Alguien te dijo hoy lo linda que te ves?, te quiero mucho cariño, quiero que pase lo que pase nunca olvides eso', fecha: '25-01-2025' },	
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/26.jpg', texto: 'Estrella 26: Soy Batman', fecha: '26-01-2025' },		


]
  // Cargar las estrellas en el contenedor
  const contenedor = document.getElementById('constelacion');
  estrellas.forEach((estrella, index) => {
	const divEstrella = document.createElement('div');
	divEstrella.classList.add('estrella-constelacion');
	divEstrella.style.left = `${estrella.x}px`;
	divEstrella.style.top = `${estrella.y}px`;
	divEstrella.dataset.index = index;
  
	contenedor.appendChild(divEstrella);
  
	// Mostrar la información al pasar el cursor o hacer clic
	divEstrella.addEventListener('mouseenter', () => mostrarInfo(estrella));  // Al pasar el mouse
	divEstrella.addEventListener('click', () => mostrarInfo(estrella));  // Al hacer clic
  });
  
  // Función para mostrar la información de la estrella
  function mostrarInfo(estrella) {
	const infoDiv = document.getElementById('info-estrella');
	const texto = document.getElementById('texto');
	const foto = document.getElementById('foto');
	const fecha = document.getElementById('fecha');
	
	texto.textContent = estrella.texto;
	foto.src = estrella.foto;
	fecha.textContent = `Fecha: ${estrella.fecha}`;  // Mostrar la fecha
  
	infoDiv.style.display = 'block';  // Hacer visible el cuadro de información
  }

// Agregar un evento de clic en el documento
document.addEventListener('click', (event) => {
  // Verificar si el clic fue fuera del cuadro de información
  const infoDiv = document.getElementById('info-estrella');
  const isClickInside = infoDiv.contains(event.target) || event.target.closest('.estrella-constelacion');
  
  // Si el clic fue fuera del cuadro de información, ocultarlo
  if (!isClickInside) {
    infoDiv.style.display = 'none';
  }
});

