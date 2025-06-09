function validarFormulario() {
  
  const campos = ['nome', 'email', 'mensagem'];
  campos.forEach(id => {
    document.getElementById(id).style.borderColor = '';
  });

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let erros = [];

  
