import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
