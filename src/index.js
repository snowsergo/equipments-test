import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import rootReducer from './redux/rootReducer';
const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
