/* ==========================================================================
   Corporación Valle Cochamó — interacciones de la portada
   Vanilla JS, sin dependencias. Todo es progresivo: si falla, la página sirve.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     Año en el pie
     ---------------------------------------------------------------------- */
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------------------
     Cabecera fija: sombra al hacer scroll
     ---------------------------------------------------------------------- */
  var cabecera = document.getElementById('cabecera');
  var arriba = document.getElementById('arriba');

  function alHacerScroll() {
    var y = window.scrollY;
    if (cabecera) cabecera.classList.toggle('esta-fija', y > 8);
    if (arriba) arriba.classList.toggle('esta-visible', y > 700);
  }
  window.addEventListener('scroll', alHacerScroll, { passive: true });
  alHacerScroll();

  if (arriba) {
    arriba.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ----------------------------------------------------------------------
     Menú móvil
     ---------------------------------------------------------------------- */
  var boton = document.getElementById('hamburguesa');
  var menu = document.getElementById('menu-movil');

  if (boton && menu) {
    menu.removeAttribute('hidden'); // lo controlamos con CSS, no con el atributo

    var abrirCerrar = function (abrir) {
      boton.setAttribute('aria-expanded', String(abrir));
      boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
      menu.classList.toggle('esta-abierto', abrir);
      document.body.style.overflow = abrir ? 'hidden' : '';
    };

    boton.addEventListener('click', function () {
      abrirCerrar(boton.getAttribute('aria-expanded') !== 'true');
    });

    // Cerrar al elegir un destino
    menu.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () { abrirCerrar(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('esta-abierto')) {
        abrirCerrar(false);
        boton.focus();
      }
    });

    // Acordeones del menú móvil
    menu.querySelectorAll('.menu-movil__boton').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var abierto = btn.getAttribute('aria-expanded') === 'true';
        menu.querySelectorAll('.menu-movil__boton').forEach(function (otro) {
          otro.setAttribute('aria-expanded', 'false');
        });
        btn.setAttribute('aria-expanded', String(!abierto));
      });
    });
  }

  /* ----------------------------------------------------------------------
     Aparición progresiva de las secciones
     ---------------------------------------------------------------------- */
  var revelables = document.querySelectorAll('.revelar');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revelables.forEach(function (el) { el.classList.add('es-visible'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada, i) {
        if (!entrada.isIntersecting) return;
        var el = entrada.target;
        // Escalonamos los elementos que entran juntos
        el.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
        el.classList.add('es-visible');
        observador.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revelables.forEach(function (el) { observador.observe(el); });
  }

  /* ----------------------------------------------------------------------
     Contadores de la franja de cifras
     ---------------------------------------------------------------------- */
  var formato = new Intl.NumberFormat('es-CL');

  function animarContador(el) {
    var destino = parseInt(el.dataset.contador, 10);
    if (isNaN(destino)) return;

    if (reduceMotion) {
      el.textContent = formato.format(destino);
      return;
    }

    var duracion = 1400;
    var inicio = null;

    function paso(ahora) {
      if (inicio === null) inicio = ahora;
      var avance = Math.min((ahora - inicio) / duracion, 1);
      var suave = 1 - Math.pow(1 - avance, 3); // easeOutCubic
      el.textContent = formato.format(Math.round(destino * suave));
      if (avance < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  var contadores = document.querySelectorAll('[data-contador]');
  if ('IntersectionObserver' in window) {
    var obsCifras = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        animarContador(entrada.target);
        obsCifras.unobserve(entrada.target);
      });
    }, { threshold: 0.5 });
    contadores.forEach(function (el) { obsCifras.observe(el); });
  } else {
    contadores.forEach(animarContador);
  }

  /* ----------------------------------------------------------------------
     Sección activa en la navegación
     ---------------------------------------------------------------------- */
  var enlacesNav = Array.prototype.slice.call(
    document.querySelectorAll('.nav__enlace[href^="#"]')
  );
  var secciones = enlacesNav
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (secciones.length && 'IntersectionObserver' in window) {
    var obsNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        enlacesNav.forEach(function (a) {
          a.setAttribute(
            'aria-current',
            a.getAttribute('href') === '#' + entrada.target.id ? 'true' : 'false'
          );
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secciones.forEach(function (s) { obsNav.observe(s); });
  }

  /* ----------------------------------------------------------------------
     Boletín (sin backend: deja el envío listo para conectar)
     ---------------------------------------------------------------------- */
  var form = document.getElementById('form-boletin');
  var estado = document.getElementById('boletin-estado');

  if (form && estado) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('#boletin-email');
      var nombre = form.querySelector('#boletin-nombre');

      if (!nombre.value.trim()) {
        estado.textContent = 'Cuéntanos tu nombre para saludarte bien.';
        estado.className = 'boletin__nota';
        nombre.focus();
        return;
      }
      if (!email.checkValidity() || !email.value.trim()) {
        estado.textContent = 'Revisa tu correo: parece que falta algo.';
        estado.className = 'boletin__nota';
        email.focus();
        return;
      }

      // TODO: conectar con el proveedor de correo de la corporación.
      estado.textContent = '¡Gracias, ' + nombre.value.trim() + '! Te escribiremos pronto.';
      estado.className = 'boletin__ok';
      form.reset();
    });
  }
})();
