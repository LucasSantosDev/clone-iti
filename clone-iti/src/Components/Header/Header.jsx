import styles from "./Header.module.css";
import itauLogo from "../../assets/itau-logo.svg";
import { IoIosContrast } from "react-icons/io";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src={itauLogo} alt="Logotipo do itaú" />
          <p>abra sua conta</p>
        </div>

        <button>
          <IoIosContrast />
        </button>
      </div>
    </header>
  );
}
