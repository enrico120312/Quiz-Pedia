
import React from "react";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#11111f",
      color: "#fff",
      padding: "45px 8% 20px",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "35px",
        paddingBottom: "35px"
      }}>

        <div style={{ maxWidth: "300px" }}>
          <h2 style={{ color: "#9b7bff" }}>
            🧠 QuizPedia
          </h2>
          <p style={{ color: "#aaaabe", lineHeight: "1.6" }}>
            Teste seus conhecimentos, descubra curiosidades
            e desafie sua mente!
          </p>
        </div>

        <div>
          <h3 style={{ color: "#9b7bff" }}>Navegação</h3>
          <p><a href="/" style={linkStyle}>Início</a></p>
          <p><a href="/quizzes" style={linkStyle}>Quizzes</a></p>
          <p><a href="/sobre" style={linkStyle}>Sobre nós</a></p>
        </div>

        <div>
          <h3 style={{ color: "#9b7bff" }}>Ajuda</h3>
          <p><a href="/contato" style={linkStyle}>Contato</a></p>
          <p><a href="/privacidade" style={linkStyle}>Privacidade</a></p>
          <p><a href="/termos" style={linkStyle}>Termos de uso</a></p>
        </div>

      </div>

      <div style={{
        borderTop: "1px solid #303047",
        paddingTop: "20px",
        textAlign: "center",
        color: "#85859b",
        fontSize: "13px"
      }}>
        <p>
          © {new Date().getFullYear()} QuizPedia.
          Todos os direitos reservados.
        </p>
        <p>Feito para mentes curiosas 💜</p>
      </div>

    </footer>
  );
}

const linkStyle = {
  color: "#aaaabe",
  textDecoration: "none"
};

export default Footer;

