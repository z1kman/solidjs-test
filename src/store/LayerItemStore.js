import { batch, createSignal } from "solid-js";

export class LayerItemStore {
  constructor() {
    this.id = createSignal(-1);
    this.name = createSignal("");
  }

  setState({ id, name }) {
    const [, setId] = this.id;
    const [, setName] = this.name;

    setName(name);
    setId(id);
  }

  getId() {
    const [getter] = this.id;
    return getter();
  }

  getName() {
    const [getter] = this.name;
    return getter();
  }

  getState() {
    return { name: this.getName(), id: this.getId() };
  }
}
