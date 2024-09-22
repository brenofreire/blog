import { Bio } from "./entities/profile/ui/bio";
import { Header } from "./widgets/header/header";
import { Welcome } from "./widgets/welcome/welcome";

export default function Home() {
  return (
    <div>
      <Header />
      <Bio />
      <main>
        <Welcome />
      </main>
    </div>
  );
}
