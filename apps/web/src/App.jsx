import { useState } from "react";

// ─── Composant EvenementCarte ───────────────────────────────────────────────
const EvenementCarte = ({ ev }) => {
  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "0.8rem 0",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ margin: "0 0 0.4rem 0", color: "#1a3a5c" }}>{ev.titre}</h3>
      <p style={{ margin: "0.2rem 0", color: "#555" }}>
        📂 Catégorie : <strong>{ev.categorie}</strong>
      </p>
      <p style={{ margin: "0.2rem 0", color: "#555" }}>
        📍 Lieu : {ev.lieu_nom}
      </p>
      <p style={{ margin: "0.2rem 0", color: "#ea7d2b", fontWeight: "bold" }}>
        💰 {prix}
      </p>
    </div>
  );
};

// ─── Composant App ──────────────────────────────────────────────────────────
const App = () => {
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState(null);

  const charger = async () => {
    setChargement(true);
    setErreur(null);
    try {
      const reponse = await fetch("/evenements.json");
      const data = await reponse.json();
      setEvenements(data);
    } catch (error) {
      console.error("Erreur :", error);
      setErreur("Impossible de charger les événements.");
    }
    setChargement(false);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ color: "#1a3a5c" }}>SenEvent — Événements à Dakar</h1>

      <button
        onClick={charger}
        disabled={chargement}
        style={{
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          cursor: chargement ? "not-allowed" : "pointer",
          backgroundColor: "#1a3a5c",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          opacity: chargement ? 0.7 : 1,
        }}
      >
        {chargement ? "Chargement..." : "Charger les événements"}
      </button>

      {erreur && (
        <p style={{ color: "red", marginTop: "1rem" }}>{erreur}</p>
      )}

      <div style={{ marginTop: "1rem" }}>
        {evenements.map(ev => (
          <EvenementCarte key={ev.id} ev={ev} />
        ))}
      </div>

      {evenements.length > 0 && (
        <p style={{ color: "#888", fontSize: "0.9rem" }}>
          {evenements.length} événement(s) chargé(s)
        </p>
      )}
    </div>
  );
};

export default App;
