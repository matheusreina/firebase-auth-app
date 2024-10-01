import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        uid: user.uid,
      });

      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar: ", error);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input type="date" placeholder="Data de Nascimento" onChange={(e) => setDataNascimento(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
