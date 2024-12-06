import Link from "next/link";
import styles from "@/styles/TypeCard.module.css";

const TypeCard = ({ type }) => {
  return (
    <div className={styles.card}>
      <Link href={`/types/${type.name}`}>
        <h3>{type.name}</h3>
      </Link>
    </div>
  );
};

export default TypeCard;
