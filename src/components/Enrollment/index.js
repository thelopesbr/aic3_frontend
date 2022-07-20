import React from "react";

import { Form } from "./style";

export default function Enrollment() {
  return (
    <Form>
      <h1>Fazer Inscrição</h1>
      <label htmlFor="username">Jogador 1</label>
      <input type="text" id="username" required />
      <label htmlFor="username2">Jogador 2</label>
      <input type="text" id="username2" required />
      <label htmlFor="category">Categoria</label>
      <select name="category" id="category" required>
        <option value="">Selecione</option>
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
        <option value="3">Categoria 3</option>
      </select>
      <label htmlFor="restriction">Restrição</label>
      <input type="text" id="restriction" />
      <label htmlFor="tournament">Torneio</label>
      <select name="tournament" id="tournament" required>
        <option value="">Selecione</option>
        <option value="1">Torneio 1</option>
        <option value="2">Torneio 2</option>
        <option value="3">Torneio 3</option>
      </select>
      <button>Enviar</button>
      <a href="/esqueci-minha-senha">Esqueci minha senha</a>
    </Form>
  );
}
