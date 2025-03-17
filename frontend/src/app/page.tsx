import Navbar from "./components/Navbar";
import { BackgroundLines } from "./components/ui/BackgroundLines";
import { CompareDemo } from "./components/ui/CompareDemo";

export default function Home() {
  return (
    <div>
        <BackgroundLines>
          <h1>Welcome to My Site</h1>
          {/* <CompareDemo /> */}
          <Navbar />
        </BackgroundLines>
    </div>
  );
}
