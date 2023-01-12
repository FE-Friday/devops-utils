import { removeKeys } from "../object";

const Store = window.sessionStorage;
const storeMap = new Map();

function sessionStore(namespaced = "store") {
  if (storeMap.has(namespaced)) {
    return storeMap.get(namespaced);
  }
  storeMap.set(namespaced, new Storage(namespaced));
  return storeMap.get(namespaced);
}

function saveState(namespaced, state) {
  Store.setItem(namespaced, JSON.stringify(state));
}

class Storage {
  constructor(namespaced) {
    this.namespaced = namespaced;
    this.state = {};
    this.init();
  }

  init() {
    try {
      const data = Store.getItem(this.namespaced);
      if (data) {
        this.state = JSON.parse(data);
      }
      saveState(this.namespaced, this.state);
    } catch (err) {
      this.state = {};
      saveState(this.namespaced, this.state);
    }
  }

  setItem(key, data) {
    this.state[key] = data;
    saveState(this.namespaced, this.state);
    return this.state;
  }

  getItem(key) {
    return this.state[key];
  }

  removeItem(key) {
    this.state = removeKeys(this.state, [key]);
    saveState(this.namespaced, this.state);
    return this.state;
  }

  clear() {
    this.state = {};
    Store.removeItem(this.namespaced);
  }
}

export default sessionStore;
