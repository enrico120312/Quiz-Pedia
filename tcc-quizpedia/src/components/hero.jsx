import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
    respostaCorreta: 2,
    categoria: "Ciência",
    dificuldade: "Fácil",
  },
  {
    id: 2,
    pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
    alternativas: ["1822", "1889", "1888", "1900"],
    respostaCorreta: 1,
    categoria: "História",
    dificuldade: "Fácil",
  },
  {
    id: 3,
    pergunta: "Qual linguagem de programação é executada nativamente nos navegadores web?",
    alternativas: ["Python", "Java", "C#", "JavaScript"],
    respostaCorreta: 3,
    categoria: "Tecnologia",
    dificuldade: "Fácil",
  },
  {
    id: 4,
    pergunta: "Qual é o país com a maior extensão territorial do mundo?",
    alternativas: ["Canadá", "China", "Estados Unidos", "Rússia"],
    respostaCorreta: 3,
    categoria: "Geografia",
    dificuldade: "Fácil",
  },
  {
    id: 5,
    pergunta: "Quem pintou a obra 'A Noite Estrelada'?",
    alternativas: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
    respostaCorreta: 1,
    categoria: "Artes",
    dificuldade: "Médio",
  },
  {
    id: 6,
    pergunta: "Qual elemento químico possui o símbolo 'Au' na tabela periódica?",
    alternativas: ["Prata", "Alumínio", "Ouro", "Argônio"],
    respostaCorreta: 2,
    categoria: "Ciência",
    dificuldade: "Médio",
  },
  {
    id: 7,
    pergunta: "No React, qual hook é utilizado para lidar com efeitos colaterais em componentes funcionais?",
    alternativas: ["useState", "useContext", "useEffect", "useReducer"],
    respostaCorreta: 2,
    categoria: "Tecnologia",
    dificuldade: "Médio",
  },
  {
    id: 8,
    pergunta: "Qual é a capital da Austrália?",
    alternativas: ["Sydney", "Melbourne", "Canberra", "Perth"],
    respostaCorreta: 2,
    categoria: "Geografia",
    dificuldade: "Difícil",
  },
  {
    id: 9,
    pergunta: "Quem escreveu o clássico livro 'Dom Quixote'?",
    alternativas: ["Miguel de Cervantes", "William Shakespeare", "Machado de Assis", "Gabriel García Márquez"],
    respostaCorreta: 0,
    categoria: "Literatura",
    dificuldade: "Médio",
  },
  {
    id: 10,
    pergunta: "Qual foi o primeiro satélite artificial lançado ao espaço pela humanidade?",
    alternativas: ["Apollo 11", "Sputnik 1", "Explorer 1", "Voyager 1"],
    respostaCorreta: 1,
    categoria: "História",
    dificuldade: "Difícil",
  },
];

const BoltIcon = () => (
  <svg
    style={{ width: "14px", height: "14px", flexShrink: 0 }}
    viewBox="0 0 24 24"
    fill="#f59e0b"
  >
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    style={{ width: "14px", height: "14px", flexShrink: 0 }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="#059669"
    strokeWidth={2.2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrophyIcon = ({ size = 14, color = "#4f46e5" }) => (
  <svg
    style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0 }}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={2.2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 21h8m-4-4v4m-5-9a5 5 0 0010 0V4H7v8zm10-6h2a2 2 0 012 2v1a4 4 0 01-4 4h-1M7 6H5a2 2 0 00-2 2v1a4 4 0 004 4h1"
    />
  </svg>
);

// Barra superior compacta com a sua logo à esquerda e pílula de perguntas à direita
function TopNavbar({ totalPerguntas, onVoltarInicio }) {
  return (
    <nav
      style={{
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 4px",
      }}
    >
      <button
        type="button"
        onClick={onVoltarInicio}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo QuizPedia"
          style={{
            height: "42px",
            width: "auto",
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
        <div>
          <span style={{ display: "block", fontSize: "16px", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
            Quiz<span style={{ color: "#4f46e5" }}>Pedia</span>
          </span>
          <span style={{ display: "block", fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
            Conhecimento Interativo
          </span>
        </div>
      </button>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          borderRadius: "999px",
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          fontSize: "12px",
          fontWeight: 600,
          color: "#334155",
        }}
      >
        <BoltIcon />
        <span>{totalPerguntas} Perguntas</span>
      </div>
    </nav>
  );
}

// Tela Inicial interna
function TelaInicial({ onIniciarQuiz, totalPerguntas }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", padding: "0 16px 32px" }}>
      <TopNavbar totalPerguntas={totalPerguntas} onVoltarInicio={() => {}} />

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
            padding: "32px 28px",
            textAlign: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          }}
        >
          <img
            src="/logo.png"
            alt="QuizPedia Cérebro do Conhecimento"
            style={{
              width: "180px",
              height: "auto",
              borderRadius: "14px",
              margin: "0 auto 16px",
              display: "block",
              objectFit: "contain",
            }}
          />

          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "999px",
              backgroundColor: "#eef2ff",
              border: "1px solid #e0e7ff",
              color: "#4f46e5",
              fontWeight: 600,
              fontSize: "12px",
              marginBottom: "14px",
            }}
          >
            Plataforma de Aprendizado
          </span>

          <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#0f172a", marginBottom: "10px", lineHeight: 1.2 }}>
            Teste seus conhecimentos no <span style={{ color: "#4f46e5" }}>QuizPedia</span>
          </h1>

          <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "480px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            Responda a {totalPerguntas} perguntas selecionadas de diversas áreas do conhecimento, acompanhe seu progresso em tempo real e acumule pontos.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "12px",
              marginBottom: "28px",
              textAlign: "left",
            }}
          >
            <div style={{ padding: "14px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#4f46e5", display: "block", marginBottom: "4px" }}>
                Formato
              </span>
              <p style={{ color: "#334155", fontWeight: 500, fontSize: "12px", margin: 0 }}>
                {totalPerguntas} questões objetivas de múltipla escolha
              </p>
            </div>

            <div style={{ padding: "14px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#059669", display: "block", marginBottom: "4px" }}>
                Pontuação
              </span>
              <p style={{ color: "#334155", fontWeight: 500, fontSize: "12px", margin: 0 }}>
                Fácil: 10 • Médio: 20 • Difícil: 30 pts
              </p>
            </div>

            <div style={{ padding: "14px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#d97706", display: "block", marginBottom: "4px" }}>
                Feedback
              </span>
              <p style={{ color: "#334155", fontWeight: 500, fontSize: "12px", margin: 0 }}>
                Correção imediata e relatório final
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onIniciarQuiz}
            style={{
              padding: "10px 28px",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Iniciar Quiz →
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente Principal do Quiz
function Quiz({ onVoltarInicio }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [animarEntrada, setAnimarEntrada] = useState(true);

  const perguntaAtual = questions[indiceAtual];
  const totalPerguntas = questions.length;
  const jaRespondeu = alternativaSelecionada !== null;

  useEffect(() => {
    setAnimarEntrada(false);
    const timer = setTimeout(() => {
      setAnimarEntrada(true);
    }, 40);
    return () => clearTimeout(timer);
  }, [indiceAtual, quizFinalizado]);

  const calcularPontosPorDificuldade = (dificuldade) => {
    switch (dificuldade) {
      case "Fácil":
        return 10;
      case "Médio":
        return 20;
      case "Difícil":
        return 30;
      default:
        return 10;
    }
  };

  const handleSelecionarAlternativa = (indiceAlternativa) => {
    if (jaRespondeu) return;

    setAlternativaSelecionada(indiceAlternativa);

    if (indiceAlternativa === perguntaAtual.respostaCorreta) {
      const pontosGanhos = calcularPontosPorDificuldade(perguntaAtual.dificuldade);
      setPontuacao((prev) => prev + pontosGanhos);
      setAcertos((prev) => prev + 1);
    }
  };

  const handleProximaPergunta = () => {
    if (indiceAtual + 1 < totalPerguntas) {
      setIndiceAtual((prev) => prev + 1);
      setAlternativaSelecionada(null);
    } else {
      setQuizFinalizado(true);
    }
  };

  const handleReiniciarQuiz = () => {
    setIndiceAtual(0);
    setAlternativaSelecionada(null);
    setPontuacao(0);
    setAcertos(0);
    setQuizFinalizado(false);
  };

  const obterEstiloAlternativa = (index) => {
    const base = {
      width: "100%",
      textAlign: "left",
      padding: "11px 14px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#ffffff",
      color: "#334155",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      transition: "all 0.15s ease",
      cursor: jaRespondeu ? "default" : "pointer",
    };

    if (!jaRespondeu) return base;

    if (index === perguntaAtual.respostaCorreta) {
      return {
        ...base,
        border: "1.5px solid #10b981",
        backgroundColor: "#ecfdf5",
        color: "#064e3b",
      };
    }

    if (index === alternativaSelecionada && index !== perguntaAtual.respostaCorreta) {
      return {
        ...base,
        border: "1.5px solid #f43f5e",
        backgroundColor: "#fff1f2",
        color: "#881337",
      };
    }

    return {
      ...base,
      border: "1px solid #f1f5f9",
      backgroundColor: "#f8fafc",
      color: "#94a3b8",
    };
  };

  // Tela Final de Resultados
  if (quizFinalizado) {
    const erros = totalPerguntas - acertos;
    const porcentagem = Math.round((acertos / totalPerguntas) * 100);

    let mensagemMotivacional = "";
    if (porcentagem >= 80) {
      mensagemMotivacional = "Excelente desempenho! Você demonstrou domínio nos temas apresentados.";
    } else if (porcentagem >= 50) {
      mensagemMotivacional = "Bom trabalho! Você acertou a maioria das questões, continue praticando.";
    } else {
      mensagemMotivacional = "Continue praticando! Cada tentativa ajuda a fixar novos conhecimentos.";
    }

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", padding: "0 16px 32px" }}>
        <TopNavbar totalPerguntas={totalPerguntas} onVoltarInicio={onVoltarInicio} />

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "680px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              padding: "32px 28px",
              textAlign: "center",
              opacity: animarEntrada ? 1 : 0,
              transform: animarEntrada ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#eef2ff",
                border: "1px solid #e0e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
              }}
            >
              <TrophyIcon size={18} color="#4f46e5" />
            </div>

            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8", display: "block", marginBottom: "4px" }}>
              Resultado Final
            </span>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
              Quiz Concluído!
            </h2>
            <p style={{ color: "#64748b", fontSize: "13px", maxWidth: "420px", margin: "0 auto 24px" }}>
              {mensagemMotivacional}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "10px", marginBottom: "24px" }}>
              <div style={{ padding: "12px", borderRadius: "12px", backgroundColor: "#eef2ff", border: "1px solid #e0e7ff" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#4f46e5", display: "block" }}>Pontuação</span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#312e81" }}>{pontuacao} pts</span>
              </div>

              <div style={{ padding: "12px", borderRadius: "12px", backgroundColor: "#ecfdf5", border: "1px solid #d1fae5" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#059669", display: "block" }}>Acertos</span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#065f46" }}>{acertos}</span>
              </div>

              <div style={{ padding: "12px", borderRadius: "12px", backgroundColor: "#fff1f2", border: "1px solid #ffe4e6" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#e11d48", display: "block" }}>Erros</span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#9f1239" }}>{erros}</span>
              </div>

              <div style={{ padding: "12px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", display: "block" }}>Aproveitamento</span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#1e293b" }}>{porcentagem}%</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <button
                type="button"
                onClick={handleReiniciarQuiz}
                style={{
                  padding: "10px 22px",
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Jogar Novamente
              </button>
              <button
                type="button"
                onClick={onVoltarInicio}
                style={{
                  padding: "10px 22px",
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progressoPercentual = ((indiceAtual + 1) / totalPerguntas) * 100;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", padding: "0 16px 32px" }}>
      {/* Barra Superior Externa */}
      <TopNavbar totalPerguntas={totalPerguntas} onVoltarInicio={onVoltarInicio} />

      {/* Card Principal */}
      <main style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "4px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
            padding: "24px 28px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
            opacity: animarEntrada ? 1 : 0,
            transform: animarEntrada ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.25s ease",
          }}
        >
          {/* Topo do Card: Progresso à esquerda + Badges de Acertos e Pontos lado a lado à direita */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "12px" }}>
            <div>
              <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8" }}>
                Progresso
              </span>
              <p style={{ fontSize: "15px", fontWeight: 800, color: "#0f172a", margin: "2px 0 0" }}>
                Pergunta <span style={{ color: "#4f46e5" }}>{indiceAtual + 1}</span> de {totalPerguntas}
              </p>
            </div>

            {/* Badges lado a lado */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 11px",
                  borderRadius: "9px",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#047857",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                <CheckCircleIcon />
                <span>
                  {acertos} {acertos === 1 ? "acerto" : "acertos"}
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 11px",
                  borderRadius: "9px",
                  backgroundColor: "#eef2ff",
                  border: "1px solid #c7d2fe",
                  color: "#4338ca",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                <TrophyIcon size={14} color="#4338ca" />
                <span>{pontuacao} pts</span>
              </div>
            </div>
          </div>

          {/* Barra de Progresso */}
          <div style={{ width: "100%", height: "6px", backgroundColor: "#f1f5f9", borderRadius: "999px", overflow: "hidden", marginBottom: "18px" }}>
            <div
              style={{
                height: "100%",
                width: `${progressoPercentual}%`,
                backgroundColor: "#4f46e5",
                borderRadius: "999px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {/* Tags de Categoria e Dificuldade lado a lado */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "6px",
                backgroundColor: "#eef2ff",
                border: "1px solid #e0e7ff",
                color: "#4f46e5",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              {perguntaAtual.categoria}
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "6px",
                backgroundColor: "#ecfdf5",
                border: "1px solid #d1fae5",
                color: "#047857",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              Dificuldade: {perguntaAtual.dificuldade} (+{calcularPontosPorDificuldade(perguntaAtual.dificuldade)} pts)
            </span>
          </div>

          {/* Enunciado */}
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", margin: "0 0 18px", lineHeight: 1.4 }}>
            {perguntaAtual.pergunta}
          </h2>

          {/* Lista de Alternativas no formato A) ... B) ... C) ... D) ... */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {perguntaAtual.alternativas.map((alternativa, index) => {
              const letras = ["A", "B", "C", "D"];
              const isCorreta = jaRespondeu && index === perguntaAtual.respostaCorreta;
              const isErrada =
                jaRespondeu &&
                index === alternativaSelecionada &&
                index !== perguntaAtual.respostaCorreta;

              let corLetra = "#4f46e5";
              if (isCorreta) corLetra = "#047857";
              else if (isErrada) corLetra = "#be123c";
              else if (jaRespondeu) corLetra = "#94a3b8";

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleSelecionarAlternativa(index)}
                  disabled={jaRespondeu}
                  style={obterEstiloAlternativa(index)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                    <span style={{ fontWeight: 700, color: corLetra }}>{letras[index]})</span>
                    <span style={{ fontWeight: 500 }}>{alternativa}</span>
                  </div>

                  {isCorreta && (
                    <span style={{ color: "#059669", fontWeight: 700, fontSize: "12px", flexShrink: 0 }}>
                      ✓ Correta
                    </span>
                  )}
                  {isErrada && (
                    <span style={{ color: "#e11d48", fontWeight: 700, fontSize: "12px", flexShrink: 0 }}>
                      ✕ Errada
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Rodapé do Card */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              {!jaRespondeu ? (
                <span style={{ color: "#94a3b8" }}>Selecione uma alternativa para continuar</span>
              ) : alternativaSelecionada === perguntaAtual.respostaCorreta ? (
                <span style={{ color: "#059669", fontWeight: 600 }}>
                  Resposta correta! (+{calcularPontosPorDificuldade(perguntaAtual.dificuldade)} pts)
                </span>
              ) : (
                <span style={{ color: "#e11d48", fontWeight: 600 }}>
                  Incorreto. A resposta certa era{" "}
                  <strong>{perguntaAtual.alternativas[perguntaAtual.respostaCorreta]}</strong>.
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleProximaPergunta}
              disabled={!jaRespondeu}
              style={{
                padding: "9px 18px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "12px",
                border: "none",
                backgroundColor: jaRespondeu ? "#4f46e5" : "#e2e8f0",
                color: jaRespondeu ? "#ffffff" : "#94a3b8",
                cursor: jaRespondeu ? "pointer" : "not-allowed",
                transition: "background-color 0.15s ease",
              }}
            >
              {indiceAtual + 1 === totalPerguntas ? "Finalizar Quiz" : "Próxima Pergunta"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Componente principal exportado como Hero
export function Hero() {
  const [quizIniciado, setQuizIniciado] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {!quizIniciado ? (
        <TelaInicial
          onIniciarQuiz={() => setQuizIniciado(true)}
          totalPerguntas={questions.length}
        />
      ) : (
        <Quiz onVoltarInicio={() => setQuizIniciado(false)} />
      )}
    </div>
  );
}

export default Hero;