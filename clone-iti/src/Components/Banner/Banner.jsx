import styles from './Banner.module.css'
import backgroundBanner from '../../assets/banner-background.webp'
import pictureMion from '../../assets/banner-mion.webp'

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.containerBanner}>
        <div className={styles.containerContent}>
          <div className={styles.divBackground}>
            <img
              className={styles.background}
              src={backgroundBanner}
              alt="Banner background"
            />
          </div>

          <div className={styles.heroText}>
            <h1 className={styles.h1}>
              o banco digital <span className={styles.spanTitle}>grátis </span>
              do itaú
            </h1>
            <p className={styles.paragrafo}>
              a conta <strong>completa</strong> onde seu dinheiro{' '}
              <strong>rende mais que a poupança</strong>
            </p>
          </div>

          <div className={styles.divMion}>
            <img
              className={styles.pictureMion}
              src={pictureMion}
              alt="image of presenter Marcus Mion showing the iti app on a cell phone"
            />
          </div>
        </div>

        <form>
          <fieldset className={styles.fildsetForm}>
            <input
              id="input-Banner"
              name="Banner"
              type="text"
              inputMode="numeric"
              maxLength="14"
              placeholder="Digite seu CPF"
            />
            <label htmlFor="input-Banner">
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
  )
}
