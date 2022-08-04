import { Header } from './Components/Header/Header'
import { Banner } from './Components/Banner/Banner'
import { Card } from './Components/Card/Card'
import { OptionsSection } from './sections/OptionsSection'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <OptionsSection />
    </div>
  )
}
