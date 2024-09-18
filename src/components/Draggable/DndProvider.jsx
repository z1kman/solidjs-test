import { createContext, createSignal, useContext } from "solid-js";

const DndContext = createContext();

export function DndProvider(props) {
  const [activeId, setActiveId] = createSignal(null);
  const [container, setContainerRect] = createSignal(null);

  const onDragStart = (event, id) => {
    setActiveId(id);
    props.onDragStart &&
      props.onDragStart({ event, activeId: activeId(), container });
  };

  const onDragOver = (event, id) => {
    props.onDragOver &&
      props.onDragOver({ event, activeId: activeId(), id, container });
  };
  const onDragEnd = (event, id) => {
    props.onDragEnd &&
      props.onDragEnd({ event, activeId: activeId(), id, container });
  };

  const handleRef = (el) => {
    setContainerRect(el);
  };

  return (
    <DndContext.Provider
      value={{
        onDragStart,
        onDragOver,
        onDragEnd,
      }}
    >
      <div ref={handleRef}>{props.children}</div>
    </DndContext.Provider>
  );
}

export function useDndContext() {
  return useContext(DndContext);
}
