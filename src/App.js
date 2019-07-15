import React from 'react';
import './App.css';
import Playground from './playground/Playground';
import Http from './utils/http.util';

function App() {

  Http.get({endpoint: 'status'}).then((data) => { console.log("API is up") });

  return (
    <div className="container">
      <Playground/>
    </div>
  );
};



export default App;
