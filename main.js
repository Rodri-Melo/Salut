$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    
    $('#formulario').on('submit', function(event){
      event.preventDefault();


      var nome = $('#nome').val();
      var sobrenome = $('#sobrenome').val();
      var email = $('#email').val();
      var telefone = $('#telefone').val();

      if (nome === '' || sobrenome === '' || email === '' || telefone === '') {
        $('#mensagem').text('Por favor, preencha todos os campos').css('color', 'red');
        return;
      }


      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          telefone: telefone
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.id) { 
          $('#mensagem').text('Formulário enviado com sucesso!').css('color', 'green');
        } else {
          $('#mensagem').text('Falha ao enviar o formulário.').css('color', 'red');
        }
      })
      .catch(error => {
        $('#mensagem').text('Erro ao enviar o formulário.').css('color', 'red');
      });
    });
});
