import "./Layers.css";
import { useLayersStore } from "~/store/LayersStoreProvider";
import { LayerItem } from "../LayerItem";
import { For, Index, Show, createSignal } from "solid-js";
import { LayerItemStoreProvider } from "~/store/LayerItemStoreProvider";
import { DndProvider } from "../Draggable/DndProvider";
import { InsertionMarker } from "../InsertionMarker";
import { LAYER_HEIGHT } from "~/constants";

export function Layers() {
  const store = useLayersStore();
  const [activeId, setActiveId] = createSignal(null);
  const [scrollbarContainer, setScrollbarContainer] = createSignal(null);
  const [insertionMarkerPos, setInsertionMarkerPos] = createSignal(0);

  const [getLayers] = store.layers;

  const onDragStart = (data) => {
    setActiveId(data.activeId);
  };

  const onDragOver = (data) => {
    const scrollTop = scrollbarContainer().scrollTop;
    const pointerPos = data.event.pageY + scrollTop;
    const layerTop = data.id * LAYER_HEIGHT;
    const layerMiddle = layerTop + LAYER_HEIGHT / 2;
    const layerBottom = layerTop + LAYER_HEIGHT;

    setInsertionMarkerPos(pointerPos < layerMiddle ? layerTop : layerBottom);
  };

  const onDragEnd = (data) => {
    const scrollTop = scrollbarContainer().scrollTop;
    const pointerPos = data.event.pageY + scrollTop;
    const layerTop = data.id * LAYER_HEIGHT;
    const layerMiddle = layerTop + LAYER_HEIGHT / 2;
    const layerBottom = layerTop + LAYER_HEIGHT;

    store.moveLayer(
      data.activeId,
      data.id,
      pointerPos < layerMiddle ? "above" : "under"
    );

    resetState()
  };

  const resetState = () => {
    setInsertionMarkerPos(0);
    setActiveId(null);
  };

  const handleScrollbarRef = (elem) => {
    setScrollbarContainer(elem);
  };
  return (
    <DndProvider
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div ref={handleScrollbarRef} class="layersPanel">
        <Show when={activeId() !== null}>
          {() => <InsertionMarker insertionMarkerPos={insertionMarkerPos()} />}
        </Show>
        <For each={getLayers()} fallback={<div>Loading...</div>}>
          {(layerItemStore) => {
            return (
              <LayerItemStoreProvider store={layerItemStore}>
                <LayerItem />
              </LayerItemStoreProvider>
            );
          }}
        </For>
      </div>
    </DndProvider>
  );
}
