import { batch, createSignal } from "solid-js";

export class LayerItemStore {
  constructor() {
    this.id = createSignal(-1);
    this.name = createSignal("");
  }

  setState({ id, name }) {
    const [, setId] = this.id;
    const [, setName] = this.name;

    batch(() => {
      setId(id);
      setName(name);
    });
  }
}
