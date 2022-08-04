import styles from './Card.module.css'

export function Card(props) {
  return (
    <li className={styles.card}>
      <div className={styles.imageContent}>
        <div className={styles.background}></div>
        <img
          className={styles.imageCartaoIti}
          src={props.imgCard}
          alt={props.imgAlt}
        />
      </div>

      <div className={styles.optionsContent}>
        <h3 className={styles.optionsTitle}>
          {props.titleOne}
          <strong>{props.titleImpact}</strong>
          {props.title}
        </h3>
        <p className={styles.optionsParagraph}>{props.description}</p>
        <span className={styles.optionsSpan}>{props.littleWords}</span>
      </div>

      <div className={styles.divBtn}>
        <a
          href={props.buttonLink}
          className={styles.button}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.buttonText}
        </a>
      </div>
    </li>
  )
}
