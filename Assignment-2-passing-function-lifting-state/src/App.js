import React from 'react';
import Expanse from './component/Expanse';
import './component/expances.css'
import NewExpense from './component/newExpense/NewExpense';

function App() {

  return (
      <div>
          <NewExpense />
          <Expanse />
      </div> 
  );
}

export default App;
