import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:1234${path}`
    : path;
}

function App() {
  const [data, setData] = useState('hi');

  useEffect(() => {
    fetch(url(`/api/`))
      .then((res) => res.json())
      .then((apiData) => setData(apiData.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <h1>API Data Returned: {data}</h1>
    </div>
  );
}

export default App;
