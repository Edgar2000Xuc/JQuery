
  const miBoton = document.querySelector('#miBoton');
  miBoton.addEventListener('click', () => {
    alert('click en el botón');
  });
  
  $('#miBoton').click(() => {
    console.log('Hola, estoy utilizando jQuery');
  });
  