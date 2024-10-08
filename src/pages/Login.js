import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (error) {
      setError("Usuário não está cadastrado.");
    }
  };

  const handleHomeRedirect = () => {
    navigate("/home"); // Redireciona para a página /about
  };
  const handleCadastroRedirect = () => {
    navigate("/cadastro"); // Redireciona para a página /about
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Entrar</button>
      <div>
        <button onClick={handleHomeRedirect}>Home</button>
        <button onClick={handleCadastroRedirect}>Cadastro</button>
      </div>
    </div>
  );
}

export default Login;
