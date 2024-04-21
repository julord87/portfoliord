export function handleScroll() {
    const elements = document.querySelectorAll('.to-fade-in');
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('scroll-fade-in');
      }
    });
  }
  
  export function initScrollFadeIn() {
    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);
  
    // Llamar a la función de manejo del scroll una vez para elementos ya visibles
    handleScroll();
  }
  
  // Inicializar la animación de scroll al cargar la página
  window.addEventListener('load', initScrollFadeIn);
  