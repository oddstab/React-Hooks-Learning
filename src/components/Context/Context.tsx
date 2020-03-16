import React, {
  createContext,
  useState
} from 'react';

import Middle from './Middle'

export const BatteryContext = createContext(0);
export const OnlineContext = createContext(false);

const Context = () => {

  const [battery, setBattery] = useState(60);
  const [online, setOnline] = useState(false);

  return (
    <BatteryContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
        <button onClick={() => { setBattery(battery - 1) }}>-</button>
        <Middle />
        <button onClick={() => { setOnline(!online) }}>setOnline</button>
      </OnlineContext.Provider>
    </BatteryContext.Provider>
  );
}

export default Context;