/* ============================================
   PORTFÓLIO PESSOAL — JavaScript Global
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Navbar: Scroll shadow ----------
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ---------- Navbar: Active link ----------
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.navbar-menu a');

  for (var i = 0; i < navLinks.length; i++) {
    var href = navLinks[i].getAttribute('href');
    if (href === currentPage) {
      navLinks[i].classList.add('active');
    }
  }

  // ---------- Hamburger Menu ----------
  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.navbar-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link
    var menuLinks = navMenu.querySelectorAll('a');
    for (var j = 0; j < menuLinks.length; j++) {
      menuLinks[j].addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    }
  }

  // ---------- Scroll Reveal (Intersection Observer) ----------
  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      for (var k = 0; k < entries.length; k++) {
        if (entries[k].isIntersecting) {
          entries[k].target.classList.add('active');
          observer.unobserve(entries[k].target);
        }
      }
    }, {
      threshold: 0.15
    });

    for (var l = 0; l < revealElements.length; l++) {
      observer.observe(revealElements[l]);
    }
  }

  // ---------- Validação do Formulário ----------
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var nome = document.getElementById('formNome');
      var email = document.getElementById('formEmail');
      var assunto = document.getElementById('formAssunto');
      var mensagem = document.getElementById('formMensagem');
      var successBox = document.querySelector('.form-success');

      // Limpar erros anteriores
      var errorFields = contactForm.querySelectorAll('.error');
      for (var m = 0; m < errorFields.length; m++) {
        errorFields[m].classList.remove('error');
      }

      // Validar nome
      if (nome && nome.value.trim() === '') {
        nome.classList.add('error');
        isValid = false;
      }

      // Validar e-mail
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && (email.value.trim() === '' || !emailRegex.test(email.value.trim()))) {
        email.classList.add('error');
        isValid = false;
      }

      // Validar assunto
      if (assunto && assunto.value.trim() === '') {
        assunto.classList.add('error');
        isValid = false;
      }

      // Validar mensagem
      if (mensagem && mensagem.value.trim() === '') {
        mensagem.classList.add('error');
        isValid = false;
      }

      if (isValid) {
        // Mostrar mensagem de sucesso
        contactForm.reset();
        if (successBox) {
          successBox.classList.add('show');
          setTimeout(function () {
            successBox.classList.remove('show');
          }, 4000);
        }
      }
    });

    // Remover erro ao digitar
    var formInputs = contactForm.querySelectorAll('input, textarea');
    for (var n = 0; n < formInputs.length; n++) {
      formInputs[n].addEventListener('input', function () {
        this.classList.remove('error');
      });
    }
  }

});
