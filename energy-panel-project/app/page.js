import Slider from "@/components/Slider";
import Settings from "../settings";

export default function Home() {
  return (
    <main>
      <Slider settings={Settings} />
    </main>
  );
}
