import styles from "./Hero.module.css";
import backgroundHero from "../../assets/hero-background.webp";
import pictureMion from "../../assets/hero-mion.webp";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.containerHero}>
        <div className={styles.containerContent}>
          <img
            className={styles.background}
            src={backgroundHero}
            alt="image of presenter Marcus Mion showing the iti app on a cell phone"
          />

          <div className={styles.heroText}>
            <h1 className={styles.h1}>o banco digital grátis do itaú</h1>
            <p className={styles.paragrafo}>
              a conta <strong>completa</strong> onde seu dinheiro{" "}
              <strong>rende mais que a poupança</strong>
            </p>
          </div>

          <img className={styles.pictureMion} src={pictureMion} alt="" />
        </div>

        <form>
          <fieldset className={styles.fildsetForm}>
            <input
              id="input-hero"
              name="hero"
              type="text"
              inputMode="numeric"
              maxLength="14"
              placeholder="Digite seu CPF"
            />
            <label htmlFor="input-hero">
              Peça sua conta grátis e cartão do iti
            </label>
          </fieldset>
          <div className={styles.divButton}>
            <button type="submit" className={styles.buttonForm}>
              abra sua conta grátis
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
