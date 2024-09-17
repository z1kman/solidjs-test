import { useLayerItemStore } from "~/store/LayerItemStoreProvider";
import "./LayerItem.css";

export function LayerItem() {
  const store = useLayerItemStore();

  return <div class="layerItem">{store.name}</div>;
}
