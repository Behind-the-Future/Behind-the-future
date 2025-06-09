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

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    erros.push("O campo E-mail é obrigatório.");
    document.getElementById('email').style.borderColor = 'red';
  } else if (!emailRegex.test(email)) {
    erros.push("O e-mail fornecido não é válido.");
    document.getElementById('email').style.borderColor = 'red';
  }

  if (!mensagem) {
    erros.push("O campo Mensagem é obrigatório.");
    document.getElementById('mensagem').style.borderColor = 'red';
  } else if (mensagem.length < 10) {
    erros.push("A mensagem deve conter pelo menos 10 caracteres.");
    document.getElementById('mensagem').style.borderColor = 'red';
  }
