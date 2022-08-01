import styles from './SectionOne.module.css';
import cartaoIti from '../../assets/cartao-de-credito-iti.webp';

export function SectionOne() {
  return (
    <section className={styles.options}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          o iti é completo e <strong>tem tudo</strong> para facilitar o seu dia ;)
        </h2>
        <nav>
          <ul className={styles.optionsList}>

            <li className={styles.card}>

              <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img className={styles.imageCartaoIti} src={cartaoIti} alt="Picture of credcard iti" />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  <strong>cartão de crédito</strong> sem anuidade
                </h3>
                <p className={styles.optionsParagraph}>
                  cartão sem anuidade com até R$ 20 mil de limite! Crie sua conta, peça o seu e já comece a usar o cartão virtual após a aprovação
                </p>
                <span className={styles.optionsSpan}>suj. a análise</span>
              </div>

              <div className={styles.divBtn}>
                <a 
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank">
                  peça seu cartão
                </a>
              </div>
            </li>

            <li className={styles.card}>
              
            <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img className={styles.imageCartaoIti} src={cartaoIti} alt="Picture of credcard iti" />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  <strong>cartão de crédito</strong> sem anuidade
                </h3>
                <p className={styles.optionsParagraph}>
                  cartão sem anuidade com até R$ 20 mil de limite! Crie sua conta, peça o seu e já comece a usar o cartão virtual após a aprovação
                </p>
                <span className={styles.optionsSpan}>suj. a análise</span>
              </div>

              <div className={styles.divBtn}>
                <a 
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank">
                  peça seu cartão
                </a>
              </div>
            </li>

            <li className={styles.card}>
              
            <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img className={styles.imageCartaoIti} src={cartaoIti} alt="Picture of credcard iti" />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  <strong>cartão de crédito</strong> sem anuidade
                </h3>
                <p className={styles.optionsParagraph}>
                  cartão sem anuidade com até R$ 20 mil de limite! Crie sua conta, peça o seu e já comece a usar o cartão virtual após a aprovação
                </p>
                <span className={styles.optionsSpan}>suj. a análise</span>
              </div>

              <div className={styles.divBtn}>
                <a 
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank">
                  peça seu cartão
                </a>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </section>
  )
}