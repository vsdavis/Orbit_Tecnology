const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navAuth = document.querySelector(".nav-auth");
const linksAuth = document.querySelector(".nav-auth li");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //links animados
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");

    if (navLinks.classList.contains("open")) {
        setTimeout(() => {
            navAuth.classList.toggle("open");
        }, 1000);
    } else {
        navAuth.classList.toggle("open");
    }
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});





function setupTypedReplace() {
    // O texto para digitar no type
    var typed_class = 'typed-replaced';
  
    // O conteudo do texto original tbm para usar
    var replace_text = '<h2>technology</h2>';
  
    var options = {
      strings: ['<h2>security</h2>', '<h2>innovation</h2>', replace_text],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      smartBackspace: false,
      cursorChar: '',
      attr: null
    };
  
    // limpa o texto existente e então configure o loop
    new Typed('.' + typed_class, {
      strings: [replace_text, ''],
      backSpeed: options.backSpeed,
      backDelay: options.backDelay,
      cursorChar: options.cursorChar,
      attr: options.attr,
      startDelay: 700,
      onComplete: function (t) {
        // o texto existente foi removido, então vamos limpar tudo
        // e configure o loop Typed adequado que desejamos. Se não fizermos isso, o original
        // o conteúdo do tesxto interrompe o fluxo do loop.
        t.destroy();
        document.getElementsByClassName(typed_class)[0].textContent = '';
        new Typed('.' + typed_class, options);
      }
    });
  }
  
  setupTypedReplace();

  
  