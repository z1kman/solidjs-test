import { createContext, useContext } from "solid-js";
import { LayersStore } from "./LayersStore";

const LayersStoreContext = createContext();

export function LayersStoreProvider(props) {
  const store = new LayersStore();

  return (
    <LayersStoreContext.Provider value={store}>
      {props.children}
    </LayersStoreContext.Provider>
  );
}

export function useLayersStore() {
  return useContext(LayersStoreContext);
}
