import React from 'react';
import './App.css';
import DataTable from './components/DataTable';

function App() {
  const dataList = [
    'This is the first element', 'The is the second element', 'And this is the last element'
  ]
  console.log(dataList)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Displaying Data in Table Format</h1>
        <h2>First Assignment of The Class</h2>
        <br/>
        <DataTable className="Table" data={dataList} />
      </header>
    </div>
  );
}

export default App;
