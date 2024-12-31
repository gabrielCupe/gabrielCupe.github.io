// Estrellas con sus respectivas rutas de imagen, texto, y fecha
const estrellas = [
	{ x: 300, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/1.jpg', texto: 'Estrella 1: Brillante y poderosa.', fecha: '2024-12-30' },
	{ x: 500, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/2.jpg', texto: 'Estrella 2: La más cercana al horizonte.', fecha: '2024-12-30' },
	{ x: 700, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/3.jpg', texto: 'Estrella 3: Un símbolo de luz.', fecha: '2024-12-30' },
	{ x: 400, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/4.jpg', texto: 'Estrella 4: Estrella fugaz.', fecha: '2024-12-30' },
	{ x: 600, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/5.jpg', texto: 'Estrella 5: Constelación de fuego.', fecha: '2024-12-30' },
	{ x: 800, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/6.jpg', texto: 'Estrella 6: Guardiana del cielo.', fecha: '2024-12-30' },
	{ x: 200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/7.jpg', texto: 'Estrella 7: La viajera intergaláctica.', fecha: '2024-12-30' },
	{ x: 1000, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/8.jpg', texto: 'Estrella 8: La estrella del amanecer.', fecha: '2024-12-30' },
	{ x: 300, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/9.jpg', texto: 'Estrella 9: En el horizonte lejano.', fecha: '2024-12-30' },
	{ x: 1200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/10.jpg', texto: 'Estrella 10: La estrella polar.', fecha: '2024-12-30' },
	{ x: 800, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/11.jpg', texto: 'Estrella 11: Una guía en la noche.', fecha: '2024-12-30' },
	{ x: 1100, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/12.jpg', texto: 'Estrella 12: Centelleante y misteriosa.', fecha: '2024-12-30' },
	{ x: 150, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/13.jpg', texto: 'Estrella 13: Un punto luminoso en la oscuridad.', fecha: '2024-12-30' },
	{ x: 600, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/14.jpg', texto: 'Estrella 14: Lejana y resplandeciente.', fecha: '2024-12-30' },
	{ x: 1300, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/15.jpg', texto: 'Estrella 15: Siempre brillante en el cielo.', fecha: '2024-12-30' },
	{ x: 450, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/16.jpg', texto: 'Estrella 16: Una estrella fugaz.', fecha: '2024-12-30' },
	{ x: 950, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/17.jpg', texto: 'Estrella 17: Espléndida y fuerte.', fecha: '2024-12-30' },
	{ x: 200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/18.jpg', texto: 'Estrella 18: Estrella solitaria.', fecha: '2024-12-30' },
	{ x: 1200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/19.jpg', texto: 'Estrella 19: Un faro en el universo.', fecha: '2024-12-30' },
	{ x: 500, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/20.jpg', texto: 'Estrella 20: En el centro del cosmos.', fecha: '2024-12-30' },
	{ x: 150, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/21.jpg', texto: 'Estrella 21: Siempre luminosa.', fecha: '2024-12-30' },
	{ x: 1300, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/22.jpg', texto: 'Estrella 22: Un destello brillante.', fecha: '2024-12-30' },
	{ x: 950, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/23.jpg', texto: 'Estrella 23: Refugio en la oscuridad.', fecha: '2024-12-30' },
	{ x: 200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/24.jpg', texto: 'Estrella 24: Un toque de luz.', fecha: '2024-12-30' },
	{ x: 800, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/25.jpg', texto: 'Estrella 25: Un rayo en la noche.', fecha: '2024-12-30' },
	{ x: 300, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/26.jpg', texto: 'Estrella 26: Como un cometa.', fecha: '2024-12-30' },
	{ x: 1200, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/27.jpg', texto: 'Estrella 27: Reluciente y viva.', fecha: '2024-12-30' },
	{ x: 450, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/28.jpg', texto: 'Estrella 28: Una chispa fugaz.', fecha: '2024-12-30' },
	{ x: 700, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/29.jpg', texto: 'Estrella 29: En la ruta de los sueños.', fecha: '2024-12-30' },
	{ x: 1100, y: Math.random() * 0.3 * window.innerHeight, foto: 'fotos/30.jpg', texto: 'Estrella 30: La más luminosa del cielo.', fecha: '2024-12-30' },
	// Puedes agregar más estrellas
  ];
  
  // Cargar las estrellas en el contenedor
  const contenedor = document.getElementById('constelacion');
  estrellas.forEach((estrella, index) => {
	const divEstrella = document.createElement('div');
	divEstrella.classList.add('estrella-constelacion');
	divEstrella.style.left = `${estrella.x}px`;
	divEstrella.style.top = `${estrella.y}px`;
	divEstrella.dataset.index = index;
  
	contenedor.appendChild(divEstrella);
  
	// Mostrar la información al hacer clic o pasar el cursor
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
  