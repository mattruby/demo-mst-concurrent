import React, { Component } from "react";
import { values } from "mobx";
import { observer } from "mobx-react";

import BoxView from "./box-view";
import ArrowView from "./arrow-view";

class Canvas extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="app">
        <div className="canvas">
          <svg>
            {store.arrows.map((arrow) => (
              <ArrowView arrow={arrow} key={arrow.id} />
            ))}
          </svg>
          {values(store.boxes).map((box) => (
            <BoxView box={box} store={store} key={box.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default observer(Canvas);
