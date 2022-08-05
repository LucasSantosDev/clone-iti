import styles from '../Components/Card/Card.module.css'
import cartaoIti from '../assets/cartao-de-credito-iti.webp'
import cartaoVirtual from '../assets/cartao-virtual.webp'
import app from '../assets/aplicativo.webp'
import Card from '../Components/Card/Card'

export default function OptionsSection() {
  return (
    <section className={styles.options}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          o iti é completo e <strong>tem tudo</strong> para facilitar o seu dia
          ;)
        </h2>
        <nav>
          <ul className={styles.optionsList}>
            <Card
              imgCard={cartaoIti}
              imgAlt="Picture of credcard iti"
              titleImpact="cartão de crédito"
              title=" sem anuidade"
              description="cartão sem anuidade com até R$ 20 mil de limite! Crie sua conta, peça o seu e já comece a usar o cartão virtual após a aprovação"
              littleWords="suj. a análise"
              buttonLink="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
              buttonText="peça seu cartão"
            />
            <Card
              imgCard={cartaoVirtual}
              imgAlt="virtual credcard iti"
              titleImpact="cartão virtual"
              title=" da conta"
              description="Você usa ele na função crédito para compras online e o valor
              sai direto do seu saldo. Abra sua conta e acesse seu cartão, é
              gratuito!"
              littleWords=""
              buttonLink="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
              buttonText="abra sua conta grátis"
            />
            <Card
              imgCard={app}
              imgAlt="app of iti credicard"
              titleOne="conta"
              titleImpact=" rende mais"
              title=" que a poupança"
              description="a conta iti é digital, grátis e completa. Você coloca seu
              dinheiro e ele já começa a render mais que a poupança, a 100%
              do CDI, e pode usar quando quiser!"
              littleWords=""
              buttonLink="https://www.itau.com.br/cartoes/escolha/iti/?utm_source=conta_iti_itau&utm_medium=cardvitrine&utm_sou=iti-conta&utm_med=cross-sell&utm_camp=home"
              buttonText="abra sua conta grátis"
            />
          </ul>
        </nav>
      </div>
    </section>
  )
}
