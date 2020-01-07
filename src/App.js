import React, { useState } from 'react';
import './App.css';

import Result from '../src/components/Result';

import api from '../src/services/api';

function App() {

  const [cep, setCep] = useState('');
  const [result, setResult] = useState('');

  function _handleFindCep() {
    if (cep) {
      api.get(`/${cep}/json`)
        .then(res => { setResult(res.data) })
        .catch(error => alert('Verifique o cep digitado: ', error));
    }
  }

  return (
    <div className="App">
      <header class="w3-container w3-teal">
        <h1>Get Cep</h1>
      </header>
      <div class="w3-container">
        <p>
          <input value={cep} placeholder='Cep' onChange={e => setCep(e.target.value)}></input>
          <input type="button" value="Find" onClick={_handleFindCep}></input>
        </p>
        <p>
          {(result) ?
            <Result result={result} /> :
            <h5>No Result</h5>}
        </p>
      </div>
    </div>
  );
}

export default App;
