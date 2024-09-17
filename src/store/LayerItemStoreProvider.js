import { createContext, useContext } from "solid-js";
import { LayerItemStore } from "./LayerItemStore";

const LayerItemStoreContext = createContext();

export function LayerItemStoreProvider(props) {

  return (
    <LayerItemStoreContext.Provider value={props.store}>
      {props.children}
    </LayerItemStoreContext.Provider>
  );
}

export function useLayerItemStore() {
  return useContext(LayerItemStoreContext);
}
