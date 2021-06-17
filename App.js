import * as React from 'react';
import Counter from './src/component/counter';
import store from './src/redux/store/index';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

