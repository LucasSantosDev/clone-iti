import styles from './SectionOne.module.css'
import cartaoIti from '../../assets/cartao-de-credito-iti.webp'
import cartaoVirtual from '../../assets/cartao-virtual.webp'
import app from '../../assets/aplicativo.webp'

export function SectionOne() {
  return (
    <section className={styles.options}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          o iti é completo e <strong>tem tudo</strong> para facilitar o seu dia
          ;)
        </h2>
        <nav>
          <ul className={styles.optionsList}>
            <li className={styles.card}>
              <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img
                  className={styles.imageCartaoIti}
                  src={cartaoIti}
                  alt="Picture of credcard iti"
                />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  <strong>cartão de crédito</strong> sem anuidade
                </h3>
                <p className={styles.optionsParagraph}>
                  cartão sem anuidade com até R$ 20 mil de limite! Crie sua
                  conta, peça o seu e já comece a usar o cartão virtual após a
                  aprovação
                </p>
                <span className={styles.optionsSpan}>suj. a análise</span>
              </div>

              <div className={styles.divBtn}>
                <a
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  peça seu cartão
                </a>
              </div>
            </li>

            <li className={styles.card}>
              <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img
                  className={styles.imageCartaoIti}
                  src={cartaoVirtual}
                  alt="Picture of credcard iti"
                />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  <strong>cartão virtual</strong> da conta
                </h3>
                <p className={styles.optionsParagraph}>
                  Você usa ele na função crédito para compras online e o valor
                  sai direto do seu saldo. Abra sua conta e acesse seu cartão, é
                  gratuito!
                </p>
              </div>

              <div className={styles.divBtn}>
                <a
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  abra sua conta grátis
                </a>
              </div>
            </li>

            <li className={styles.card}>
              <div className={styles.imageContent}>
                <div className={styles.background}></div>
                <img
                  className={styles.imageCartaoIti}
                  src={app}
                  alt="Picture of credcard iti"
                />
              </div>

              <div className={styles.optionsContent}>
                <h3 className={styles.optionsTitle}>
                  conta <strong>rende mais</strong> que a poupança
                </h3>
                <p className={styles.optionsParagraph}>
                  a conta iti é digital, grátis e completa. Você coloca seu
                  dinheiro e ele já começa a render mais que a poupança, a 100%
                  do CDI, e pode usar quando quiser!
                </p>
              </div>

              <div className={styles.divBtn}>
                <a
                  href="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
                  className={styles.button}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  abra sua conta grátis
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
