import "./Layers.css";
import { useLayersStore } from "~/store/LayersStoreProvider";
import { LayerItem } from "../LayerItem";
import { Index } from "solid-js";
import { LayerItemStoreProvider } from "~/store/LayerItemStoreProvider";

export function Layers() {
  const store = useLayersStore();

  const [getLayers] = store.layers;

  return (
    <div class="layersPanel">
      <Index each={getLayers()} fallback={<div>Loading...</div>}>
        {(layerItemStore) => {
          return (
            <LayerItemStoreProvider store={layerItemStore()}>
              <LayerItem />
            </LayerItemStoreProvider>
          );
        }}
      </Index>
    </div>
  );
}
