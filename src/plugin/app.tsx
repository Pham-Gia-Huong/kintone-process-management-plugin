import React from 'react';
import Provider from './context';
import Left from './views/left';
import Center from './views/center';
import Right from './views/right';
import './index.css';
const App = () => {
  return (
    <div className="wrapped-app">
      <Provider>
        <Left />
        <Center />
        <Right />
      </Provider>
    </div>
  );
};

export default App;
