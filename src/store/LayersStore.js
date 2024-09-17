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
}
