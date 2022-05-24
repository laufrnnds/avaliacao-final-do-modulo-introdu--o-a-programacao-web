//---------------------------------------------------------------------- JS PÁGINA LOGIN -------------------------------------------------------

// -----> VALIDAÇÃO DO LOGIN <-----
let login = window.sessionStorage.getItem("login");

if (login) {
  window.location = "./home.html";
}

// -----> DECLARAÇÃO DAS VARIÁVEIS <-----

let emailInput = document.querySelector("#emaillogin");
let senhaInput = document.querySelector("#senhalogin");
let formLogin = document.querySelector("#formlogin");

// -----> EVENTOS <-----

formLogin.addEventListener("submit", verificaUsuario);

// -----> FUNÇÕES <-----

function verificaUsuario(e) {
  e.preventDefault();
  let usuarios = buscaListaUser();
  let email = emailInput.value;
  let senha = senhaInput.value;

  let validaEmail = usuarios.some(
    (elemento) => elemento.emailUser === email );
  let validaSenha = usuarios.some(
    (elemento) => elemento.senhaUser === senha
  );

  if(validaEmail){

    if(validaSenha){

    let posicao = usuarios.findIndex((elemento) => elemento.emailUser === email);

    window.sessionStorage.setItem("login", true);
    window.sessionStorage.setItem("indexUser", posicao);
    window.location = "./home.html";

    }else{

      alert("Senha incorreta")
    }
  }else{
    alert("Não existe conta com este e-mail")
  }
}

function buscaListaUser() {
  return JSON.parse(localStorage.getItem("usuario")) || [];
}
