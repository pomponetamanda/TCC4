import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap

function Login() {
  return (

    <nav class="cadastro">

      <h2>Cadastro</h2>
        <form id="registerForm">
        <label for="registerUsername">Username</label>
        <input type="text" id="registerUsername" name="registerUsername" required></input>

        <label for="registerPassword">Password</label>
        <input type="password" id="registerPassword" name="registerPassword" required></input>

        <input type="submit" value="Registrar"></input>
        </form>

        
    </nav>
    
    

        );
}   
export default Login;














