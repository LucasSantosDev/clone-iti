import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { SectionOne } from "./Components/SectionOne/SectionOne";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <SectionOne />
      </main>
    </div>
  );
}
