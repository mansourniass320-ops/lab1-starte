import styles from "./EtatChargement.module.css";

const EtatChargement = ({ chargement, erreur, onReessayer }) => {
  if (chargement) {
    return <div className={styles.chargement}>Chargement des événements en cours...</div>;
  }

  if (erreur) {
    return (
      <div className={styles.erreur}>
        <p>Oups ! Une erreur est survenue : {erreur}</p>
        {onReessayer && (
          <button onClick={onReessayer} className={styles.bouton}>
            Réessayer
          </button>
        )}
      </div>
    );
  }

  return null;
};

export default EtatChargement;
