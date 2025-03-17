import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BackgroundLines } from "./components/ui/BackgroundLines";

export default function Home() {
  return (
    <div>
        <BackgroundLines>
          <main>
          <h1>Welcome to My Site</h1>
            <Navbar />
            <Hero />
  
          </main>
        </BackgroundLines>
    </div>
  );
}
