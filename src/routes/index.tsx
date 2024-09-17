import { Title } from "@solidjs/meta";
import { Layers } from "~/components/Layers";
import { LayersStoreProvider } from "~/store/LayersStoreProvider";

export default function Home() {
  return (
    <main>
      <Title>Hierarchy</Title>
      <LayersStoreProvider>
        <Layers />
      </LayersStoreProvider>
    </main>
  );
}
