document.querySelector(".contact-form").addEventListener("submit", function() {
  alert("Mensagem enviada com sucesso!");

  if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefoult();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body:formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("mensagem enviada com sucesso");
                form.reset();
            } else {
                alert("Erro ao enviar. Teste novamente.");
            }
        }).catch(error => {
            alert("Erro ao enviar. Verifique sua conexão.");
        });
    });
  }
});

document.addEventListener('DOMContentLoaded',() => {
    const toggle = document.querySelector('.slider-input');

    toggle.addEventListener('change', () => {
        // console.log('dark mode ativado'); // TESTE
        document.body.classList.toggle('dark-mode');
    });
});


    function toggleMenu() {
    const menu = document.querySelector('.home-links');
    menu.classList.toggle('active');
  };

  document.querySelectorAll('.home-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.home-links').classList.remove('active');
  });
});

    const toggle = document.querySelector('.slider-input');

    // carregar tema salvo
    window.onload = () => {
        const thema = localStorage.getItem('theme');

        if (theme === 'dark') {
            document.body.classList.add('.dark-mode');
            toggle.checked = true;
        }
    };

    toggle.addEventListener('change', () => {
        document.bory.classList.toggle('.dark-mode');

        if (document.body.classList.contains('.dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else{
            localStorage.setItem('theme', 'light');
        }

});
