// Estrellas con sus respectivas rutas de imagen, texto y fecha
const estrellas = [
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/1.jpg', texto: 'Estrella 1: La primera foto tuya del año, eres tan linda, no puedo expresar toda la felicidad que me traes cuando hablo contigo, asi que lo resumire en un: te amo mucho amorcito <3', fecha: '01-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/2.jpg', texto: 'Estrella 2: Tambien extraño a kiki, pero, es por un bien mayor, quiero poder estar contigo lo mas antes posible, solo, esperame...', fecha: '02-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/3.jpg', texto: 'Estrella 3: Para mi eres la mejor cocinera, te quiero mucho, cariño.', fecha: '03-01-2025' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/4.jpg', texto: 'Estrella 4: No se cuanto habràs sufrido antes, y se que ese dolor sigue en ti, pero, pase lo que pase, nunca te abandonarè, te lo prometo', fecha: '2024-10' },
	{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/5.jpg', texto: 'Estrella 5: Tu eres la mas linda, ya sea con tu pelo seco o mojado, te amo Jandy', fecha: '2024-10' },
	//{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/6.jpg', texto: 'Estrella 6: Cuando veo esto, lagrimeo un poco, de verdad gracias.', fecha: '2024-10' },
	//{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/7.jpg', texto: 'Estrella 7: Relajadito.', fecha: '2024-11' },
	//{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/8.jpg', texto: 'Estrella 8: Mango helado 🥭.', fecha: '2024-10' },
	//{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/9.jpg', texto: 'Estrella 9: Realmente, Te ves muy linda con la vincha <3.', fecha: '2024-11' },
	//{ x: Math.random() * window.innerWidth, y: Math.random() * (window.innerHeight * 0.3), foto: 'imagenes/10.jpg', texto: 'Estrella 10: Foto kiki, Te amo Jandy', fecha: '2024-11' },
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

