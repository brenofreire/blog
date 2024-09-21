import { Bio } from "./entities/profile/ui/bio";
import Header from "./widgets/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Bio />
      <main></main>
    </div>
  );
}
