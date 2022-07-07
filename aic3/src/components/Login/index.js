import React from "react";
import { Container } from "./style";

export default function Login() {
  return (
    <Container>
      <h1>Logar-se</h1>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <button>Logar</button>
      <a href="/esqueci-minha-senha">Esqueci minha senha</a>
    </Container>
  );
}
