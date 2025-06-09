function validarFormulario() {
  
  const campos = ['nome', 'email', 'mensagem'];
  campos.forEach(id => {
    document.getElementById(id).style.borderColor = '';
  });

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let erros = [];

  
  if (!nome) {
    erros.push("O campo Nome é obrigatório.");
    document.getElementById('nome').style.borderColor = 'red';
  } else if (nome.length < 3) {
    erros.push("O nome deve conter pelo menos 3 caracteres.");
    document.getElementById('nome').style.borderColor = 'red';
  }