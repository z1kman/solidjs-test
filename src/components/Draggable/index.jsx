import { useLayerItemStore } from "~/store/LayerItemStoreProvider";
import { useDndContext } from "./DndProvider";

export function Draggable(props) {
  const store = useLayerItemStore();
  const dragStore = useDndContext();

  const onDragStart = (event) => {

    const img = new Image();
    img.src = "";

    event.dataTransfer.setDragImage(img, 0, 0);
    dragStore.onDragStart(event, store.getId());
  };

  const onDragOver = (event) => {
    event.preventDefault();
    dragStore.onDragOver(event, store.getId());
  };

  const onDrop = (event) => {
    event.preventDefault();
    dragStore.onDragEnd(event, store.getId());
  };
  return (
    <div
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.children}
    </div>
  );
}
