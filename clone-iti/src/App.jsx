import { Header } from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import { SectionOne } from "./Components/SectionOne/SectionOne";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
        <Banner />
        <SectionOne />
    </div>
  );
}
