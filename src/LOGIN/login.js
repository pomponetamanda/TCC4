import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap

function Login() {
  return (

    <nav class="login">

      <h2>Login</h2>

    <form id="loginForm">
      <label for="loginUsername">Nome de Usuário</label>
    <input type="text" id="loginUsername" name="loginUsername" required></input>

    <label for="loginPassword">Senha</label>
    <input type="password" id="loginPassword" name="loginPassword" required></input>

    <input type="submit" value="Entar"></input>
    </form>

        
    </nav>
    

        );
}   
export default Login;

