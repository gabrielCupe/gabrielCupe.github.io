// Estrellas con sus respectivas rutas de imagen, texto y fecha
const estrellas = [
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/1.jpg', texto: 'Estrella 1: Una estrella brillante.', fecha: '2024-12-30' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/2.jpg', texto: 'Estrella 2: La luz más fuerte del cielo.', fecha: '2024-12-25' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/3.jpg', texto: 'Estrella 3: Un faro de esperanza.', fecha: '2024-11-10' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/4.jpg', texto: 'Estrella 4: Una estrella distante.', fecha: '2024-07-15' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/5.jpg', texto: 'Estrella 5: El guardián del cielo.', fecha: '2024-06-30' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/6.jpg', texto: 'Estrella 6: Brillando con fuerza.', fecha: '2024-12-01' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/7.jpg', texto: 'Estrella 7: Lejos pero visible.', fecha: '2024-08-12' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/8.jpg', texto: 'Estrella 8: La más antigua.', fecha: '2024-09-20' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/9.jpg', texto: 'Estrella 9: Hermosa y brillante.', fecha: '2024-10-10' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'fotos/10.jpg', texto: 'Estrella 10: Un punto de luz.', fecha: '2024-12-05' },
	// Continúa para las demás estrellas...
	// Aquí puedes agregar hasta 30 o más estrellas con su propio texto y fecha
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
  