import React from 'react'
import {
  BatteryContext,
  OnlineContext
} from './Context'

const Leaf = () => {
  return (
    <BatteryContext.Consumer>
      {
        battery => (
          <OnlineContext.Consumer>
            {
              online => (
                <h1>
                  Battery:{battery},Online:{String(online)}
                </h1>
              )
            }
          </OnlineContext.Consumer>
        )
      }
    </BatteryContext.Consumer>
  );
}

export default Leaf;
