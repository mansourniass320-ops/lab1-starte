import styles from "./EvenementCarte.module.css";

// On remplace "ev" par "evenement" pour être raccord avec App.jsx
const EvenementCarte = ({ evenement, afficherDetails }) => {
  // Pour éviter d'avoir à réécrire "evenement.titre", "evenement.prix" partout,
  // on peut créer un raccourci local "ev" juste ici :
  const ev = evenement; 

  // Si jamais "evenement" n'est pas encore chargé, on évite le crash
  if (!ev) return null;

  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

  return (
    <div className={styles.carte}>
      <h3 className={styles.titre}>{ev.titre}</h3>
      <p className={styles.info}>
        📂 Catégorie : <strong>{ev.categorie}</strong>
      </p>
      {afficherDetails && (
        <p className={styles.info}>📍 Lieu : {ev.lieu_nom}</p>
      )}
      <p className={styles.prix}>💰 {prix}</p>
    </div>
  );
};

export default EvenementCarte;