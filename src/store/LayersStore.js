import { createSignal } from "solid-js";
import { LayerItemStore } from "./LayerItemStore";
import { NAMES } from "~/constants";

export class LayersStore {
  constructor() {
    this.layers = createSignal([]);

    const data = [];
    for (let i = 0; i < NAMES.length; i++) {
      data.push({ id: i, name: NAMES[i] });
    }
    this.fillLayers(data);
  }

  fillLayers(data) {
    const [, setLayers] = this.layers;
    const newLayers = [];
    for (const item of data) {
      const newLayer = new LayerItemStore();
      newLayer.setState({
        id: item.id,
        name: item.name,
      });

      newLayers.push(newLayer);
    }

    setLayers(newLayers);
  }

  moveLayer(activeId, targetId, position) {
    if (activeId === targetId) {
      return;
    }
    const [getLayers, setLayers] = this.layers;
    const layers = getLayers();
    const newLayersArr = layers.map((item) => ({
      id: item.getId(),
      name: item.getName(),
    }));
    const activeItem = newLayersArr.splice(activeId, 1)[0];
    const overIndex = newLayersArr.findIndex((item) => item.id === targetId)

    if(overIndex === -1 ) return

    if (position === "above") {
      newLayersArr.splice(overIndex, 0, activeItem);
    } else {
      newLayersArr.splice(overIndex + 1, 0, activeItem);
    }

    const newLayers = [];
    for (let i = 0; i < newLayersArr.length; i++) {
      const item = newLayersArr[i];
      const newLayer = new LayerItemStore();
      newLayer.setState({
        id: i,
        name: item.name,
      });

      newLayers.push(newLayer);
    }
    setLayers(newLayers);
  }
}
