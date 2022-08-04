import styles from '../Components/SectionOne/SectionOne.module.css'
import cartaoIti from '../../assets/cartao-de-credito-iti.webp'
import cartaoVirtual from '../../assets/cartao-virtual.webp'
import app from '../../assets/aplicativo.webp'
import { SectionOne } from '../Components/SectionOne/SectionOne'

export function OptionsSection() {
  return (
    <section className={styles.options}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          o iti é completo e <strong>tem tudo</strong> para facilitar o seu dia
          ;)
        </h2>
        <nav>
          <ul className={styles.optionsList}>
            <SectionOne
              imgCard={cartaoIti}
              imgAlt="Picture of credcard iti"
              titleImpact="cartão de crédito"
              title="sem anuidade"
              description="cartão sem anuidade com até R$ 20 mil de limite! Crie sua conta, peça o seu e já comece a usar o cartão virtual após a aprovação"
              littleWords="suj. a análise"
              buttonLink="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
              buttonText="peça seu cartão"
            />
          </ul>
        </nav>
      </div>
    </section>
  )
}
