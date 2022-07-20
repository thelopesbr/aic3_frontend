import React from "react";
import { Form } from "./style";

export default function Register() {
  return (
    <Form>
      <h1>Cadastrar-se</h1>
      <label htmlFor="name" required>
        Nome
      </label>
      <input type="text" id="name" />
      <label htmlFor="tel">Telefone</label>
      <input type="tel" id="tel" />
      <label htmlFor="city">Cidade</label>
      <input type="text" id="city" />
      <label htmlFor="category" required>
        Categoria
      </label>
      <select name="category" id="category">
        <option value="">Selecione</option>
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
        <option value="3">Categoria 3</option>
      </select>
      <label htmlFor="impediment">Impedimento</label>
      <input type="text" id="impediment" />
      <button type="submit">Inscrever</button>
    </Form>
  );
}
