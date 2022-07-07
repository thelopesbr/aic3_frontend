import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { GlobalStyle } from "./style/global";

export default function App() {
  return (
    <>
      <Header />
      {/* <Register /> */}
      <Login />
      <Footer />
      <GlobalStyle />
    </>
  );
}
