import { useState, useEffect } from "react";
import EvenementCarte from "./components/EvenementCarte";
import SearchBar from "./components/SearchBar";
import EtatChargement from "./components/EtatChargement";
import styles from "./App.module.css";

const App = () => {
  // --- États fictifs (en attendant la suite de ton TP pour useEffect) ---
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [evenementsFiltres, setEvenementsFiltres] = useState([]);

  const charger = () => {
    // Ta fonction pour recharger les données
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titre}>SenEvent --- Événements à Dakar</h1>
      
      <EtatChargement
        chargement={chargement}
        erreur={erreur}
        onReessayer={charger}
      />

      {!chargement && !erreur && (
        <>
          <SearchBar recherche={recherche} onRecherche={setRecherche} />
          <p className={styles.compteur}>
            {evenementsFiltres.length} événement(s) trouvé(s)
          </p>

          {evenementsFiltres.length === 0 ? (
            <p className={styles.messageVide}>Aucun événement ne correspond.</p>
          ) : (
            evenementsFiltres.map((ev) => (
              <EvenementCarte key={ev.id} ev={ev} afficherDetails={true} />
            ))
          )}
        </>
      )}
    </div>
  );
}; // <--- Vérifie bien que cette accolade et ce point-virgule sont là !

export default App;