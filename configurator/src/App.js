import logo from './logo.webp';
import './App.css';
import { loadTable } from './Table';
import { useState } from 'react';
import { ruleForm } from './ruleForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [rule, setRule] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='w-1/3' alt="logo" />
        <h1 className='color-white'>RULES</h1>

        <div className='grid grid-cols-10 w-11/12 my-5'>

          <div className='col-span-10 bg-white align-center rounded-xl'>
            <div className='w-100 text-left'>
              <a onClick={() => {
                setRule({})
                setShowForm(true)
              }} className='bg-green-500 rounded-xl px-2 m-2'>+ Add rule</a>
            </div>
            {loadTable(setRule, setShowForm)}
          </div>
        </div>
        {ruleForm(showForm, setShowForm, rule)}
      </header>
    </div>
  );
}

export default App;
