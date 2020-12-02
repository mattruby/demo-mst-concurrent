import ReactDOM from "react-dom";
import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import store from "./stores/domain-state";
import Canvas from "./components/canvas";

import "./styles.css";

// To support HMR of store, this ref holds the latest loaded store.
const storeInstance = observable.box(null);

prepareStore(store);

const App = observer(() => <Canvas store={storeInstance.get()} />);

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.unstable_createRoot(document.getElementById("root")).render(<App />);

function prepareStore(newStore) {
  storeInstance.set(newStore);
}
