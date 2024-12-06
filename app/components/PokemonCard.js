import Link from "next/link";
import styles from "@/styles/PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <Link href={`/pokemons/${pokemon.id}`}>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
