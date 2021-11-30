import styles from './Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Count</span>
      </h1>
      <p></p>
      <img src={savings} alt="Savings" />
      <LinkButton to="/newproject" text="Criar projeto" />
    </section>
  )
}

export default Home
