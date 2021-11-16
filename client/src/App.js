import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [response, setResponse] = useState({});
  useEffect(()=>{
    fetch('api/v1/say-something')
    .then((res) => res.json())
    .then((response)=>setResponse(response));
  }, [])
  return(
    <div className="App">
      <h1>{response ? response.body : 'HI'}</h1>
    </div>
  )
}
export default App;
