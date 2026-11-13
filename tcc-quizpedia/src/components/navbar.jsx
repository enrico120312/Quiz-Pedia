
import React from "react";

const linkStyle = {
  color: "#aaaabe",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "color 0.2s ease"
};

export default function Navbar() {
  return (
    <header style={{
      width: "100%",
      backgroundColor: "#11111f",
      padding: "15px 5%",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      borderBottom: "1px solid #303047"
    }}>

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>

        {/* LOGO E SLOGAN */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <h2 style={{ color: "#9b7bff", margin: 0, fontSize: "24px" }}>
              🧠 QuizPedia
            </h2>
          </a>
        </div>

        {/* LINKS DE NAVEGAÇÃO E AJUDA */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "25px"
        }}>
          <a href="/" style={linkStyle}>Início</a>
          <a href="/quizzes" style={linkStyle}>Quizzes</a>
          <a href="/sobre" style={linkStyle}>Sobre nós</a>
          <a href="/contato" style={linkStyle}>Contato</a>
          <a href="/privacidade" style={linkStyle}>Privacidade</a>
          <a href="/termos" style={linkStyle}>Termos de uso</a>
        </div>

      </nav>
    </header>
  );
}