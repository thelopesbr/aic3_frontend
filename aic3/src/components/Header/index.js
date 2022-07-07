import React from "react";
import { Container, Menu } from "./style";

export default function Header() {
  return (
    <Container>
      <a className="logo" href="#">
        Sistema Torneio Padel
      </a>
      <Menu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
