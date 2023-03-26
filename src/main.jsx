import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import { NetflixApp } from './NetflixApp'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <Router>
      <NetflixApp/>
    </Router>
  </Provider>

)
