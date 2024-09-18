import { useLayerItemStore } from "~/store/LayerItemStoreProvider";
import "./LayerItem.css";
import { Draggable } from "../Draggable";

export function LayerItem() {
  const store = useLayerItemStore();

  return (
    <Draggable>
      <div class="layerItem">
        {store.getState().id} - {store.getState().name}
      </div>
    </Draggable>
  );
}
